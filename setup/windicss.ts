import { defineWindiSetup } from "@slidev/types";

export default defineWindiSetup(() => ({
  shortcuts: {
    "bg-main": "bg-white text-[#181818] dark:bg-[#121212] dark:text-[#ddd]",
  },
  theme: {
    extend: {
      fontFamily: {
        sans: '"Roboto",ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
        mono: '"Fira Code", monospace',
      },
    },
  },
}));
