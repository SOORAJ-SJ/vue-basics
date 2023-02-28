<template>
    <div class="loader-wrapper p-4">
        <slot>Loading...</slot>
        <div class="loader">
            <div class="progress flex align-items-center">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .loader {
        height: 1em;
        border: 1px solid black;
        border-radius: 0.25em;
        position: relative;
        overflow: hidden;
    }
    .progress {
        position: absolute;
        width: fit-content;
        height: 100%;
        padding-inline: 2px;
        animation: load 4s steps(15, end) infinite;
    }
    .progress .bar {
        display: inline-block;
        height: calc(1em - 4px);
        width: 2em;
        background-color: black;
        margin-right: 2px;
    }
    .bar:first-child {
        border-radius: 0.2em 0 0 0.2em;
    }
    .bar:last-child {
        border-radius: 0 0.2em 0.2em 0;
    }
    @keyframes load {
        0% {
            left: -6.5em;
        }
        100% {
            left: 20.5em;
        }
    }
</style>
