import React from "react";

const Skeleton = () => (
 <div class="w-full mx-auto 2xl:max-w-[90rem] p-6">
  <div class="p-5 mx-auto">
    <div class="md:grid md:grid-cols-2 md:gap-12 xl:gap-32 animate-pulse">
      <div class="items-start italic">
        <div class="h-20 bg-gray-200 rounded"></div>
      </div>
      <div class="mt-5 sm:mt-10 lg:mt-0">
        <div class="space-y-6 sm:space-y-8">
          <div class="space-y-2 md:space-y-4">
            <div class="h-4 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
);

export default Skeleton;