"use client";

import { useRef, useState } from "react";
import { Button } from "./button";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Shuffle,
  Repeat,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";

const formatTime = (seconds: number = 0) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
};

const CustomSlider = ({
  value,
  onChange,
  className,
}: {
  value: number;
  onChange: (value: number) => void;
  className?: string;
}) => {
  return (
    <motion.div
      className={cn(
        "relative w-full h-1 bg-white/20 rounded-full cursor-pointer",
        className
      )}
      onClick={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = (x / rect.width) * 100;
        onChange(Math.min(Math.max(percentage, 0), 100));
      }}
    >
      <motion.div
        className="absolute top-0 left-0 h-full bg-white rounded-full"
        style={{ width: `${value}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
    </motion.div>
  );
};

export const AudioPlayer = ({
  src,
  cover,
  title,
}: {
  src: string;
  cover?: string;
  title?: string;
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const progress =
        (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(isFinite(progress) ? progress : 0);
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (value: number) => {
    if (audioRef.current && audioRef.current.duration) {
      const time = (value / 100) * audioRef.current.duration;
      if (isFinite(time)) {
        audioRef.current.currentTime = time;
        setProgress(value);
      }
    }
  };

  const handleShuffle = () => {
    setIsShuffle(!isShuffle);
  };

  const handleRepeat = () => {
    setIsRepeat(!isRepeat);
  };

  if (!src) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="relative flex flex-col mx-auto rounded-2xl overflow-hidden bg-[#030585]/90 shadow-[0_20px_40px_rgba(0,0,0,0.3)] backdrop-blur-md p-2 w-[220px] h-auto border border-white/10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.1,
          type: "spring",
        }}
        layout
      >
        <audio
          ref={audioRef}
          onTimeUpdate={handleTimeUpdate}
          src={src}
          className="hidden"
          loop={isRepeat}
        />

        <motion.div
          className="flex flex-col relative"
          layout
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {/* Cover  */}
          {cover && (
            <motion.div className="bg-white/10 overflow-hidden rounded-[12px] h-[140px] w-full relative group">
              <img
                src={cover}
                alt="cover"
                className="!object-cover w-full my-0 p-0 !mt-0 border-none !h-full transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#030585]/10 mix-blend-overlay" />
            </motion.div>
          )}

          <motion.div className="flex flex-col w-full gap-y-1.5 px-1 py-1">
            {/* Title */}
            {title && (
              <div className="flex flex-col items-center">
                <motion.h3 className="text-white font-black text-[10px] md:text-xs text-center mt-1 uppercase tracking-widest opacity-90">
                  {title}
                </motion.h3>
                <span className="font-mono text-[6px] text-white/40 uppercase tracking-[0.4em]">Jnino_Master_Series</span>
              </div>
            )}

            {/* Slider */}
            <motion.div className="flex flex-col gap-y-1 mt-1">
              <CustomSlider
                value={progress}
                onChange={handleSeek}
                className="w-full"
              />
              <div className="flex items-center justify-between px-0.5">
                <span className="text-white/80 text-[8px] font-mono font-bold">
                  {formatTime(currentTime)}
                </span>
                <span className="text-white/80 text-[8px] font-mono font-bold">
                  {formatTime(duration)}
                </span>
              </div>
            </motion.div>

            {/* Controls */}
            <motion.div className="flex items-center justify-center w-full">
              <div className="flex items-center gap-1 w-fit bg-black/20 rounded-full p-1 border border-white/5">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleShuffle();
                    }}
                    className={cn(
                      "text-white/60 hover:bg-white/10 hover:text-white h-6 w-6 rounded-full",
                      isShuffle && "bg-white/20 text-white"
                    )}
                  >
                    <Shuffle className="h-3 w-3" />
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={(e) => e.stopPropagation()}
                    className="text-white/60 hover:bg-white/10 hover:text-white h-6 w-6 rounded-full"
                  >
                    <SkipBack className="h-3.5 w-3.5" />
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePlay();
                    }}
                    variant="ghost"
                    size="icon"
                    className="bg-white text-[#030585] hover:bg-white/90 h-8 w-8 rounded-full shadow-lg"
                  >
                    {isPlaying ? (
                      <Pause className="h-4 w-4" fill="currentColor" />
                    ) : (
                      <Play className="h-4 w-4 ml-0.5" fill="currentColor" />
                    )}
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={(e) => e.stopPropagation()}
                    className="text-white/60 hover:bg-white/10 hover:text-white h-6 w-6 rounded-full"
                  >
                    <SkipForward className="h-3.5 w-3.5" />
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRepeat();
                    }}
                    className={cn(
                      "text-white/60 hover:bg-white/10 hover:text-white h-6 w-6 rounded-full",
                      isRepeat && "bg-white/20 text-white"
                    )}
                  >
                    <Repeat className="h-3 w-3" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
