import { generateClasses } from '@formkit/themes'

const config = {
  config: {
    classes: generateClasses({
      global: {
        label: 'block mb-2 text-sm font-bold uppercase tracking-wide text-slate-700',
        message: 'text-red-600 mb-5 text-sm font-semibold',
        wrapper: 'space-y-2 mb-5',
        input:
          'w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-slate-800 shadow-sm placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100',
      },
      file: {
        noFiles: 'block my-2 text-sm text-slate-500',
        fileItem: 'hidden',
      },
      submit: {
        input:
          '$reset w-full rounded-lg bg-amber-400 px-4 py-3 font-black uppercase text-slate-950 shadow-sm hover:bg-amber-300 disabled:opacity-50',
      },
    }),
  },
}

export default config
