import { generateClasses } from "@formkit/themes"

const config = {
  config: {
    classes: generateClasses({
      global: {
        label: 'block mb-1 font-bold text-lg',
        message: 'text-red-500 mb-5',
        wrapper: 'space-y-2 mb-3',
        input: 'w-full p-3 border border-gray-300 rounded text-gray-700 placehoder-gray-400'
      },
      file: {
        noFiles: 'block my-2',
        fileItem: 'hidden'
      },
      submit: {
        input: '$reset bg-amber-500 hover:bg-amber-600 w-full p-2 font-bold uppercase rounded disabled:opacity-50'
      }
    })
  }
}

export default config
