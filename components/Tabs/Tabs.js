// components/Tabs/Tabs.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        tabs:{
            type: Array,
            value: []
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
    },

    /**
     * 组件的方法列表
     */
    methods: {
        handleItemTab(e) {
            const {index} = e.currentTarget.dataset;
            // 子向父组件传值
            this.triggerEvent("tabsChange",{index})
            // console.log(index);
            // let {tabs} = this.data;
            // tabs.forEach((v,i) => i===index?v.isActive=true:v.isActive=false);
            // this.setData({
            //     tabs
            // })
        }
    }
})
