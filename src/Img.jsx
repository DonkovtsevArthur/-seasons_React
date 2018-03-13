import React, {Component} from "react";

class Img extends Component {
    state = {
        isLoading: false
    }
    componentDidMount(){
        this.loadImage(this.props.src);
    }
    componentWillReceiveProps(nextProps) {
        this.loadImage(nextProps.src);
    }
    loadImage = (src) => {
        this.setState({ isLoading: true });
        let loadSrc = new Image();
        loadSrc.onload = () => {
            this.setState({ isLoading: false });
        }
        loadSrc.src = src;
    }
    render(){
        const { src } = this.props;
        const { isLoading } = this.state;
     
       return <div>
        {isLoading ? <p>
            Загружаю....
          </p> : <img className="img" src={src} alt="" />
        }
        </div>
    }
  
};

export default Img;
