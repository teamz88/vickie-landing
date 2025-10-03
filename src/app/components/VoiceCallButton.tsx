"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Vapi from '@vapi-ai/web';

interface VoiceCallButtonProps {
  className?: string;
  apiKey: string;
  assistantId: string;
}

export default function VoiceCallButton({ 
  className = "", 
  apiKey, 
  assistantId 
}: VoiceCallButtonProps) {
  const [vapi, setVapi] = useState<Vapi | null>(null);
  const [status, setStatus] = useState<"idle" | "connecting" | "listening" | "speaking" | "processing">("idle");

  useEffect(() => {
    const vapiInstance = new Vapi(apiKey);
    setVapi(vapiInstance);

    // Event listeners
    vapiInstance.on('call-start', () => {
      // Call started
      setStatus("listening");
    });

    vapiInstance.on('call-end', () => {
      // Call ended
      setStatus("idle");
    });

    vapiInstance.on('speech-start', () => {
      // Assistant started speaking
      setStatus("speaking");
    });

    vapiInstance.on('speech-end', () => {
      // Assistant stopped speaking
      setStatus("listening");
    });

    vapiInstance.on('message', (message) => {
      if (message.type === 'transcript') {
        // Handle transcript message
      }
    });

    vapiInstance.on('error', (error) => {
      // Handle Vapi error
      setStatus("idle");
    });

    return () => {
      vapiInstance?.stop();
    };
  }, [apiKey]);

  const handleClick = () => {
    if (status === "idle") {
      setStatus("connecting");
      if (vapi) {
        vapi.start(assistantId, {}, 'c3b9fdb0-5d8a-431d-b324-9b5d5c4821e7');
      }
    } else if (status !== "connecting") {
      if (vapi) {
        vapi.stop();
      }
      setStatus("idle");
    }
  };

  const getStatusText = () => {
    switch (status) {
      case "connecting":
        return "Connecting...";
      case "listening":
        return "Listening...";
      case "speaking":
        return "Vickie is Speaking...";
      case "processing":
        return "Processing...";
      default:
        return "Hear Vickie Handle a Real Call";
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case "connecting":
        return "text-yellow-600";
      case "listening":
        return "text-blue-600";
      case "speaking":
        return "text-green-600";
      case "processing":
        return "text-orange-600";
      default:
        return "text-black";
    }
  };

  const getButtonStyle = () => {
    switch (status) {
      case "connecting":
        return "border-yellow-500 bg-yellow-50";
      case "listening":
        return "border-blue-500 bg-blue-50";
      case "speaking":
        return "border-green-500 bg-green-50";
      case "processing":
        return "border-orange-500 bg-orange-50";
      default:
        return "border-gray-900 bg-white hover:bg-gray-50";
    }
  };

  const getMicStyle = () => {
    switch (status) {
      case "connecting":
        return "animate-pulse bg-yellow-100";
      case "listening":
        return "animate-pulse bg-blue-100";
      case "speaking":
        return "bg-green-100";
      case "processing":
        return "animate-spin bg-orange-100";
      default:
        return "voice-bg";
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <button 
      type="button"
      className={`w-full max-w-[555px] cursor-pointer border rounded-full pl-6 md:pl-7 lg:pl-8 xl:pl-[35px] p-3 md:p-3 lg:p-3 xl:p-[10px] flex items-center justify-between transition-all duration-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${getButtonStyle()} ${className}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={getStatusText()}
    >
      <p className={`text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-[24px] font-medium leading-6 md:leading-6 lg:leading-6 xl:leading-[24px] transition-colors duration-300 ${getStatusColor()}`}>
        {getStatusText()}
      </p>
      <div className={`size-12 md:size-14 lg:size-16 xl:size-[68px] rounded-full flex items-center justify-center pt-1 pl-1 shrink-0 transition-all duration-300 ${getMicStyle()}`}>
        <Image 
          src="/icons/mic.svg" 
          alt="mic" 
          width={32} 
          height={32} 
          className={`md:w-9 md:h-9 lg:w-10 lg:h-10 xl:w-11 xl:h-11 transition-all duration-300 ${
            status === "listening" ? "scale-110" : 
            status === "speaking" ? "scale-105" : 
            status === "processing" ? "scale-90" : ""
          }`} 
        />
      </div>
    </button>
  );
}