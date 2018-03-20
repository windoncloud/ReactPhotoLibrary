import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../css/index/index.css';

let caption = '';
let desc = '';
let photoList = [];
let photo = [];
let nav = [];
export default class TheLogin extends Component {
    
constructor(props){
    super(props);

    photoList = this.getData();

    photo = photoList.map(
        (value, index) => {


            let photoSrc = '../../image/images/'+(index+1)+'.jpg';
            return   <div key={index} className="photo photo_front" ref={index} onClick={() =>this.turn(index)}>
                <div className="photo-wrap">
                    <div className ="side side-front">
                        <p className="image "><img src={photoSrc}/></p>
                        <p className="caption">{photoList[index].title}</p>
                    </div>
                    <div className="side side-back">
                        <p className='desc'>{photoList[index].desc}</p>
                    </div>
                </div>
            </div>;

        }
    );
    nav = photoList.map(
        (value, index) => {


            let photoSrc = '../../image/images/'+(index+1)+'.jpg';
            return       <span key={index} ref={'nav_'+index} onClick={() =>this.turn(index)} className="i">&nbsp;</span>;

        }
    );

    this.state={
        photo:photo,
        nav:nav
    };
}

componentDidMount(){

    this.turn(0);

}

turn(i){
    let midNum = photoList.length;
    midNum = Math.ceil(midNum/2);
    let ranges = this.range();
    let photoNow = photoList.map(
        (value, index) => {


            let photoSrcNow = '../../image/images/'+(index+1)+'.jpg';
            if(i == index){
                if(this.refs[i].className.indexOf('photo photo_back') >=0 ){
                    return   <div key={index} ref={index} className= "photo photo_front photo_center" onClick={() =>this.turn(index)}>
                        <div className="photo-wrap">
                            <div className ="side side-front">
                                <p className="image "><img src={photoSrcNow}/></p>
                                <p className="caption">{photoList[index].title}</p>
                            </div>
                            <div className="side side-back">
                                <p className='desc'>{photoList[index].desc}</p>
                            </div>
                        </div>
                    </div>;

                }else{
                    return   <div key={index} ref={index} className= "photo photo_back photo_center" onClick={() =>this.turn(index)}>
                        <div className="photo-wrap">
                            <div className ="side side-front">
                                <p className="image "><img src={photoSrcNow}/></p>
                                <p className="caption">{photoList[index].title}</p>
                            </div>
                            <div className="side side-back">
                                <p className='desc'>{photoList[index].desc}</p>
                            </div>
                        </div>
                    </div>;
                }

            }else{
                if(index < midNum){
                    this.refs[index].style.left = this.random(ranges.left.x)+'px';
                    this.refs[index].style.top = this.random(ranges.left.y)+'px';
                    this.refs[index].style['-webkit-transform'] = 'rotate('+this.random([-150, 150])+'deg) scale(1)';
                }else{
                    this.refs[index].style.left = this.random(ranges.right.x)+'px';
                    this.refs[index].style.top = this.random(ranges.right.y)+'px';
                    this.refs[index].style['-webkit-transform'] = 'rotate('+this.random([-150, 150])+'deg) scale(1)';
                }
                return   <div key={index} ref={index} className= "photo photo_front" onClick={() =>this.turn(index)}>
                    <div className="photo-wrap">
                        <div className ="side side-front">
                            <p className="image "><img src={photoSrcNow}/></p>
                            <p className="caption">{photoList[index].title}</p>
                        </div>
                        <div className="side side-back">
                            <p className='desc'>{photoList[index].desc}</p>
                        </div>
                    </div>
                </div>;
            }

        }
    );

    this.setState({
        photo:photoNow
    });
}

    random(range){
        let max = Math.max( range[0], range[1]);
        let min = Math.min( range[0], range[1]);

        let diff = max -min;// 差值，[1,6] => 5(0~5) (0<x<5)

        let number = Math.ceil((Math.random()*diff + min));

        return number;
    }

    //6.计算左右分区的范围{left:{x:[min,max], y:[]}, right:{}}
    range(){
        let range = {left:{x:[], y:[]}, right:{x:[], y:[]}};
        let stage = this.refs.wrap;
        let photoArea = this.refs[0];
        let wrap = {
            w:stage.scrollWidth, //clientWidth
            h:stage.scrollHeight //clientHeight
        }
        let photo = {
            w:337, //photoArea.clientWidth
            h:337 //photoArea.clientHeight
        }

        range.wrap = wrap;
        range.photo = photo;

        range.left.x = [0-photo.w, wrap.w/2 - photo.w/2];
        range.left.y = [0-photo.h, wrap.h];

        range.right.x = [wrap.w/2+photo.w/2, wrap.w + photo.w];
        range.right.y = range.left.y;

        return range;
    }

    getData(){
        let data = [
            {
                'fileName':'1.jpg',
                'title':'几米的猜想',
                'desc':'几米的故事'
            },
            {
                'fileName':'2.jpg',
                'title':'几米的猜想',
                'desc':'几米的故事'
            },
            {
                'fileName':'3.jpg',
                'title':'几米的猜想',
                'desc':'几米的故事'
            },
            {
                'fileName':'4.jpg',
                'title':'几米的猜想',
                'desc':'几米的故事'
            },
            {
                'fileName':'5.jpg',
                'title':'几米的猜想',
                'desc':'几米的故事'
            },
            {
                'fileName':'6.jpg',
                'title':'几米的猜想',
                'desc':'几米的故事'
            },
            {
                'fileName':'7.jpg',
                'title':'几米的猜想',
                'desc':'几米的故事'
            },
            {
                'fileName':'8.jpg',
                'title':'几米的猜想',
                'desc':'几米的故事'
            },
            {
                'fileName':'9.jpg',
                'title':'几米的猜想',
                'desc':'几米的故事'
            },
            {
                'fileName':'10.jpg',
                'title':'几米的猜想',
                'desc':'几米的故事'
            },
            {
                'fileName':'11.jpg',
                'title':'几米的猜想',
                'desc':'几米的故事'
            },
            {
                'fileName':'12.jpg',
                'title':'几米的猜想',
                'desc':'几米的故事'
            },
            {
                'fileName':'13.jpg',
                'title':'几米的猜想',
                'desc':'几米的故事'
            },
            {
                'fileName':'14.jpg',
                'title':'几米的猜想',
                'desc':'几米的故事'
            },
            {
                'fileName':'15.jpg',
                'title':'几米的猜想',
                'desc':'几米的故事'
            },
            {
                'fileName':'16.jpg',
                'title':'几米的猜想',
                'desc':'几米的故事'
            },
            {
                'fileName':'17.jpg',
                'title':'几米的猜想',
                'desc':'几米的故事'
            },
            {
                'fileName':'18.jpg',
                'title':'几米的猜想',
                'desc':'几米的故事'
            }
        ];
        return data;
    }

render(){


    return(

    <div>
        <div className="wrap" id = "wrap" ref="wrap">

            {this.state.photo}
            <div className="nav">
                {this.state.nav}
            </div>
            {/*<div className="photo photo_front" onClick={() =>this.turn(this)} id="photo_{{index}}">*/}


                {/*<div className="photo-wrap">*/}
                    {/*<div className ="side side-front">*/}
                        {/*<p className="image "><img src="../../image/images/1.jpg"/></p>*/}
                        {/*<p className="caption">{caption}</p>*/}
                    {/*</div>*/}
                    {/*<div className="side side-back">*/}
                        {/*<p className='desc'>{desc}</p>*/}
                    {/*</div>*/}
                {/*</div>*/}
            {/*</div>*/}


        </div>
    </div>
             
    );

}
}