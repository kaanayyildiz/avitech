import React from "react";

const Skeleton = () => (
    <div class="w-full mx-auto 2xl:max-w-[90rem] p-6 text-gray-900 animate-pulse">
    <div class="p-5 mx-auto">
        <div class="h-4 bg-gray-200 rounded w-full"></div>
        <div class="h-4 bg-gray-200 mt-2 w-1/2"></div>
    </div>
    <div class="p-5">
        <div class="grid md:grid-cols-3 gap-8 md:gap-20 text-sm">
            <div class="flex flex-col">
                <div class="h-4 bg-gray-200 rounded w-1/4"></div>
                <div class="h-4 mt-4 bg-gray-200 rounded w-1/2"></div>
            </div>
            <div>
                <div class="h-4 bg-gray-200 rounded w-1/4"></div>
                <div class="h-4 mt-4 bg-gray-200 rounded w-1/2"></div>
            </div>
        </div>
    </div>
</div>
);

export default Skeleton;