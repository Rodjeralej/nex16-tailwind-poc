"use client";

import HSelect from "@/components/HSelect";
import Typography from "@/components/Typography";

import GraphicOption from "./GraphicOption/GraphicOption";

export default function Graphics() {
  return (
    <div className="relative flex flex-col gap-4 p-8">
      <div className="absolute inset-0 bg-black-200 opacity-50" />
      <div className="relative z-10 flex flex-col md:gap-8">
        <Typography variant="heading" color="text-gray-200" uppercase>
          Display
        </Typography>
        <div className="flex flex-col md:gap-8 md:p-5">
          <GraphicOption>
            <Typography variant="subheading" color="text-gray-200">
              Screen Mode
            </Typography>
            <HSelect
              options={["Fullscreen", "Windowed", "Borderless"]}
              initialValue="Fullscreen"
            />
          </GraphicOption>
          <GraphicOption>
            <Typography variant="subheading" color="text-gray-200">
              Screen Resolution
            </Typography>
            <HSelect
              options={[
                "1280x720",
                "1366x768",
                "1600x900",
                "1920x1080",
                "2560x1440",
                "3840x2160",
              ]}
              initialValue="3840x2160"
            />
          </GraphicOption>
          <GraphicOption>
            <Typography variant="subheading" color="text-gray-200">
              HDR
            </Typography>
            <HSelect options={["Off", "On"]} initialValue="Off" />
          </GraphicOption>
          <GraphicOption>
            <Typography variant="subheading" color="text-gray-200">
              Ray Tracing
            </Typography>
            <HSelect options={["Off", "On"]} initialValue="Off" />
          </GraphicOption>
        </div>
      </div>
    </div>
  );
}
