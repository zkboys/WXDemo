const modal = weex.requireModule('modal');
export function toast({message, duration = 1}) { // duration 以秒为单位
    if(arguments.length ===1 && typeof arguments[0] === 'string'){
        message = arguments[0];
        duration = 1;
    }
    modal.toast({
        message,
        duration,
    })
}

/*
 *
 * export default {
 methods: {
 showToast (event) {
 console.log('will show toast')
 modal.toast({
 message: 'This is a toast',
 duration: 0.3
 })
 },
 showAlert (event) {
 console.log('will show alert')
 modal.alert({
 message: 'This is a alert',
 duration: 0.3
 }, function (value) {
 console.log('alert callback', value)
 })
 },
 showConfirm (event) {
 console.log('will show confirm')
 modal.confirm({
 message: 'Do you confirm ?',
 duration: 0.3
 }, function (value) {
 console.log('confirm callback', value)
 })
 },
 showPrompt (event) {
 console.log('will show prompt')
 modal.prompt({
 message: 'This is a prompt',
 duration: 0.3
 }, function (value) {
 console.log('prompt callback', value)
 })
 }
 }
 };*/