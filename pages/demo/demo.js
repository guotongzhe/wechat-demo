Page({
  data: {
    person: {
        age: 24,
        name: '杨伟伟',
        sex: 'nan',
    },
    num: 123
  },
    handleTap(e){
        console.log(e)
        const operation = e.currentTarget.dataset.operation;
        this.setData({
            num:this.data.num + operation
        })
    }
})