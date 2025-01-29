'use client';
import React from 'react';
import { GlareCard } from '@/components/ui/glare-card';
import courseData from '@/data/music_courses.json';

const CoursePage = () => {
  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
        All Courses ({courseData.courses.length})
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {courseData.courses.map((course) => (
          <GlareCard className="relative flex flex-col items-center justify-center">
            {/* Background image */}
            <img
              className="h-full w-full absolute inset-0 object-cover opacity-60"
              src="https://images.unsplash.com/photo-1527261834078-9b37d35a4a32?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            {/* Text content */}
            <div className="absolute bottom-0 left-0 right-0 py-8 px-6 bg-gradient-to-t from-black via-transparent to-transparent">
              <p className="font-bold text-white text-lg">The greatest trick</p>
              <p className="font-normal text-base text-neutral-200 mt-4">
                The greatest trick the devil ever pulled was to convince the
                world that he didn&apos;t exist.
              </p>
            </div>
          </GlareCard>
        ))}
      </div>
    </div>
  );
};

export default CoursePage;
