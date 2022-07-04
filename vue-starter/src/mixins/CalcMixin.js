import {reactive,computed} from 'vue';
export default () => {
    let formVal = reactive({
        value1: 0,
        value2: 0
    })
    let addition = computed(() => parseInt(formVal.value1) + parseInt(formVal.value2));
    let subtraction = computed(() => formVal.value1 - formVal.value2);
    let division = computed(() => formVal.value1 / formVal.value2);
    let multiplication  = computed(() => formVal.value1 * formVal.value2);
    return {
        formVal,
        addition,
        subtraction,
        division,
        multiplication,
    }
}