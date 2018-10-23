/**
 * 封装简易js库
 */
(function(win){
   function a(selector){
       return new a.fn.init(selector);
   }
   a.fn=a.prototype={
       init:function(selector){
           this.elem=document.querySelector(selector)
           return this
       },
       on:function(event,cb){
           this.elem.addEventListener(event,cb)
       },
       addClass:function(className){
            if(this.elem.className){
                arr=this.elem.className.split(/\s/)
                arr=arr.filter(item=>{
                    return !!item.trim()
                })
                if(arr.indexOf(className)<0){
                    arr.push(className)
                }
                this.elem.className=arr.join(' ')
            }else{
                this.elem.className=className
            }
            return this
        },
        removeClass:function(className){
            if(this.elem.className){
                arr=this.elem.className.split(/\s/)
                arr=arr.filter(item=>{
                    item=item.trim()
                    if(!item||item===className){
                        return false
                    }
                    return true
                })
                this.elem.className=arr.join(' ')
            }
            return this
        },
        toggleClass:function(className){
            var arr=this.elem.className.split(/\s/);
            if(arr.indexOf(className)<0){
                this.addClass(className)
            }else{
                this.removeClass(className)
            }
            return this;
        },
        css:function(k,v){
            const currentStyle=`${k}:${v}`
            const style=(this.elem.getAttribute('style')||'').trim()
            let styleArr,resultArr=[]
            if(style){
                styleArr=style.split(';')
                styleArr.forEach(item=>{
                    let arr=item.split(':').map(i=>{
                        return i.trim()
                    })
                    if(arr.length==2){
                        resultArr.push(arr[0]+':'+arr[1])
                    }
                })
                resultArr=resultArr.map(item=>{
                    if(item.indexOf(k)===0){
                        return currentStyle
                    }else{
                        return item
                    }
                })
                if(resultArr.indexOf(currentStyle<0)){
                    resultArr.push(currentStyle)
                }
                this.elem.setAttribute('style',resultArr.join(';'))
            }else{
                this.elem.setAttribute('style',currentStyle)
            }
        },
        show:function(){
             this.css('display','block');
             return this
        },
        hide:function(){
            this.css('display','none');
            return this;
        },
        scrollTop:function(){
           return window.pageYOffset;
        }
   }
   a.fn.init.prototype=a.fn
   win.a=a
})(window)