<template>
    <div class="Now">
        <div class="top-row w-full flex items-center justify-between">
            <p class="text-2xl">Now</p>
            <div class="ring-container relative flex items-center">
                <div class="ringring absolute"></div>
                <div class="circle"></div>
            </div>
        </div>
        <div class="text-sm">
            Actually working on personal projects
            <ul class="projects list-disc px-5">
                <li>PortFolio</li>
                <li>PalBro</li>
                <li>Cars Hub and ALPR</li>
            </ul>
        </div>
    </div>
</template>

<style>
    .Now { grid-area: Now; }

    .ring-container {
        position: relative;
        display: flex;
        align-items: center;
    }
    .circle {
        width: 10px;
        height: 10px;
        background-color: #62bd19;
        border-radius: 50%;
    }
    .ringring {
        border: 3px solid #62bd19;
        border-radius: 50%;
        height: 20px;
        width: 20px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        animation: pulsate 1s ease-out infinite;
    }
    @keyframes pulsate {
        0% {transform: translate(-50%, -50%) scale(0.1); opacity: 0.0;}
        50% {opacity: 1.0;}
        100% {transform: translate(-50%, -50%) scale(1.2); opacity: 0.0;}
    }
</style>
