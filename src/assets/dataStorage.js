import { ref } from 'vue'

const numberCode = ref(0)

const textCode = ref('')


function useNumberData() {
  return { numberCode }
}

function useTextData() {
    return { textCode }
  }


  const dataFunctions = {
    useNumberData,
    useTextData
  }

export default dataFunctions

