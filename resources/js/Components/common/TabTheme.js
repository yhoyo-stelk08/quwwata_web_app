const TabTheme = {
  base: "flex flex-col gap-4",
  tablist: {
    base: "flex overflow-x-auto whitespace-nowrap scrollbar-hide",
    variant: {
      default: "border-b border-gray-200 dark:border-gray-700",
      underline: "-mb-px text-xl",
      pills: "space-x-2 text-sm font-medium text-gray-500 dark:text-gray-400",
      fullWidth:
        "grid w-full grid-flow-col divide-x divide-gray-200 rounded-none text-sm font-medium shadow dark:divide-gray-700 dark:text-gray-400",
    },
    tabitem: {
      base: "flex items-center justify-center p-4 text-sm md:text-lg font-medium first:ml-0 focus:outline-none disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500",
      variant: {
        default: {
          base: "",
          active: {
            on: "bg-gray-100 text-slate-600 dark:bg-gray-800 dark:text-slate-500",
            off: "text-slate-500 hover:bg-gray-50 hover:text-slate-100 dark:text-slate-400 dark:hover:bg-gray-800 dark:hover:text-slate-300",
          },
        },
        underline: {
          base: "",
          active: {
            on: "border-b-2 border-slate-200 text-slate-200",
            off: "border-b-2 border-transparent text-slate-500 hover:text-slate-100 hover:border-b-slate-200 dark:text-slate-400 dark:hover:text-slate-300",
          },
        },
        pills: {
          base: "",
          active: {
            on: "rounded-lg bg-cyan-600 text-slate",
            off: "rounded-lg hover:bg-gray-100 hover:text-slate-900 dark:hover:bg-gray-800 dark:hover:text-slate",
          },
        },
        fullWidth: {
          base: "w-full first:ml-0",
          active: {
            on: "bg-gray-100 text-slate-900 dark:bg-gray-700 dark:text-slate",
            off: "bg-white hover:bg-gray-50 hover:text-slate-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-slate",
          },
        },
      },
      icon: "mr-2 h-5 w-5",
    },
  },
  tabitemcontainer: {
    base: "",
    variant: {
      default: "",
      underline: "",
      pills: "",
      fullWidth: "",
    },
  },
  tabpanel: "py-3",
};

export default TabTheme;
