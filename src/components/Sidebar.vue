<template>


    <div>
        <!-- Overlay Background (Blur Effect) -->
        <div v-if="sidebar.isOpen" class="fixed inset-0 bg-zinc-950/40  backdrop-blur-sm z-40 transition-opacity"
            @click="sidebar.toggleSidebar"></div>

        <!-- Sidebar (Now on the Right) -->
        <div :class="[
            'fixed inset-y-0 right-0 w-64  bg-linear-45  rounded-tl-4xl from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] text-white py-8 transform transition-transform duration-300 z-50 opacity-80',
            sidebar.isOpen ? 'translate-x-0' : 'translate-x-full'
        ]">
            <div class="p-4 flex justify-between items-center">
                <h1 class="text-lg font-semibold"><svg width="127" height="34" viewBox="0 0 127 34"
                        class="h-9 overflow-visible" fill="#fff">
                        <path d="M19.599 18.5a3 3 0 1 1-5.197-3 3 3 0 0 1 5.197 3"
                            style="transform:none;transform-origin:17.0005px 17.0005px" />
                        <path
                            d="M23.232 10.207a2 2 0 1 1-3.464-2 2 2 0 0 1 3.464 2m-3.464 15.586a2 2 0 1 1 3.464-2 2 2 0 0 1-3.464 2M26 19a2 2 0 1 1 0-4 2 2 0 0 1 0 4m-11.768 6.793a2 2 0 1 1-3.464-2 2 2 0 0 1 3.464 2m-3.464-15.586a2 2 0 1 1 3.464-2 2 2 0 0 1-3.464 2M8 19a2 2 0 1 1 0-4 2 2 0 0 1 0 4"
                            style="transform:none;transform-origin:17px 17.0004px" />
                        <path
                            d="M25.866 3.645a1 1 0 1 1-1.732-1 1 1 0 0 1 1.732 1M33 18a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-1.644-8.134a1 1 0 1 1-1-1.732 1 1 0 0 1 1 1.732m-1 16a1 1 0 1 1 1-1.732 1 1 0 0 1-1 1.732M16 33a1 1 0 1 1 2 0 1 1 0 0 1-2 0m8.134-1.644a1 1 0 1 1 1.733-1 1 1 0 0 1-1.733 1m-14.268 0a1 1 0 1 1-1.732-1 1 1 0 0 1 1.732 1M1 18a1 1 0 1 1 0-2 1 1 0 0 1 0 2m2.645 7.866a1 1 0 1 1-1-1.732 1 1 0 0 1 1 1.732m-1-16a1 1 0 1 1 1-1.732 1 1 0 0 1-1 1.732M16 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0M8.134 3.645a1 1 0 1 1 1.732-1 1 1 0 0 1-1.732 1"
                            style="transform:none;transform-origin:17px 17px" />
                        <path
                            d="M51.606 25.5V10.54h2.464V25.5zm5.83-6.512h-4.048V17.47h3.718q1.386 0 2.112-.66.748-.682.748-1.826 0-1.122-.748-1.782-.726-.682-2.068-.682h-3.762v-1.98h3.828q2.42 0 3.85 1.166 1.43 1.144 1.43 3.146 0 2.024-1.386 3.08-1.364 1.056-3.674 1.056m3.168 6.512-.902-4.004q-.198-.858-.528-1.298a1.5 1.5 0 0 0-.836-.594q-.528-.154-1.342-.154h-3.19v-1.584h3.542q1.496 0 2.42.286.946.264 1.474.946.527.682.836 1.914L63.2 25.5zm6.905-7.898h-2.354q.198-1.298.836-2.222a4.06 4.06 0 0 1 1.716-1.408q1.079-.506 2.53-.506 1.584 0 2.64.594 1.079.572 1.606 1.606t.528 2.398v4.576q0 1.056.088 1.716.11.66.308 1.144h-2.464q-.198-.44-.242-1.1t-.044-1.342v-4.972q0-1.275-.638-1.958-.615-.682-1.958-.682-1.143 0-1.782.594-.615.572-.77 1.562m5.478.748v1.606q-1.803 0-2.948.176-1.143.176-1.782.506-.637.308-.88.748a1.85 1.85 0 0 0-.242.946q0 .749.572 1.188.573.418 1.496.418.99 0 1.76-.462a3.4 3.4 0 0 0 1.232-1.276q.462-.792.462-1.716h1.056q-.088 1.408-.55 2.42t-1.188 1.65q-.703.637-1.54.946a5.1 5.1 0 0 1-1.672.286q-1.187 0-2.09-.374-.9-.374-1.408-1.122-.506-.748-.506-1.87 0-1.21.66-2.068t1.98-1.32a11.5 11.5 0 0 1 2.552-.55q1.32-.132 3.036-.132m9.376 7.436q-1.54 0-2.662-.726-1.122-.748-1.716-2.134t-.594-3.278q0-2.992 1.342-4.576 1.343-1.605 3.63-1.606 1.98 0 3.146 1.584 1.188 1.584 1.188 4.598 0 1.892-.528 3.278-.528 1.364-1.518 2.112-.968.748-2.288.748m.308-1.98q1.408 0 2.134-1.056.748-1.079.748-3.102 0-2.024-.77-3.102-.749-1.1-2.112-1.1-1.408 0-2.156 1.078-.726 1.078-.726 3.124 0 2.002.748 3.08.77 1.078 2.134 1.078m2.882 1.694V9.66h2.354V25.5zm5.193 0V13.774H93.1V25.5zm0-13.178V9.66H93.1v2.662zm7.422 5.28h-2.354q.198-1.298.836-2.222a4.06 4.06 0 0 1 1.716-1.408q1.078-.506 2.53-.506 1.584 0 2.64.594 1.078.572 1.606 1.606t.528 2.398v4.576q0 1.056.088 1.716.11.66.308 1.144h-2.464q-.198-.44-.242-1.1a20 20 0 0 1-.044-1.342v-4.972q0-1.275-.638-1.958-.617-.682-1.958-.682-1.144 0-1.782.594-.617.572-.77 1.562m5.478.748v1.606q-1.805 0-2.948.176-1.145.176-1.782.506-.639.308-.88.748a1.85 1.85 0 0 0-.242.946q0 .749.572 1.188.572.418 1.496.418.99 0 1.76-.462a3.43 3.43 0 0 0 1.232-1.276q.462-.792.462-1.716h1.056q-.088 1.408-.55 2.42t-1.188 1.65q-.705.637-1.54.946a5.1 5.1 0 0 1-1.672.286q-1.188 0-2.09-.374-.903-.374-1.408-1.122-.506-.748-.506-1.87 0-1.21.66-2.068t1.98-1.32a11.5 11.5 0 0 1 2.552-.55q1.32-.132 3.036-.132m4.975 7.15V13.774h2.354V25.5zm2.354-6.886h-.924q.11-1.716.682-2.86.594-1.144 1.562-1.716t2.222-.572q1.233 0 2.112.484.88.462 1.364 1.408.484.924.484 2.31V25.5h-2.332v-7.348q0-.858-.264-1.452a2.06 2.06 0 0 0-.77-.946q-.505-.33-1.32-.33-.66 0-1.188.286a2.8 2.8 0 0 0-.902.704q-.352.44-.55 1.012a4 4 0 0 0-.176 1.188m10.673 3.388V11.068h2.354V21.87q0 1.012.396 1.496.418.484 1.628.484h.462v1.716q-.175.11-.594.154a5.4 5.4 0 0 1-.88.066q-1.694 0-2.53-.946t-.836-2.838m-1.584-6.402v-1.826h6.468V15.6z" />
                    </svg></h1>

            </div>
            <ul class="p-4 space-y-4">
                <li class="hover:bg-zinc-700 p-2 rounded"><a href="#">🏠 Home</a></li>
                <li class="hover:bg-zinc-700 p-2 rounded"><a href="#">📁 Files</a></li>
                <li class="hover:bg-zinc-700 p-2 rounded"><a href="#">⚙ Settings</a></li>
            </ul>
        </div>

        <!-- Toggle Button (Now on the Right) -->

    </div>
</template>

<script setup>
import { useSidebarStore } from '@/stores/sidebarStore';

const sidebar = useSidebarStore();
</script>