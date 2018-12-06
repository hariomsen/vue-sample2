Vue.component('body-component', {
    props:['list'],
    template: '<div style="height:80vh"><h4>List of numbers</h4><ul><li v-for="n in list">{{n.num}}</li></ul></div>'
})