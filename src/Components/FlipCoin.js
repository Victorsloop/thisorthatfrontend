import React,{ Component } from 'react'
import Coin from './Coin'
import '../Styling/WelcomeStyling.scss'
import styled from "styled-components";


 
class FlipCoin extends Component{
  static defaultProps = {
    coins : [
     
      // Sides of the coin
      {side:'head', imgSrc:
'https://media.geeksforgeeks.org/wp-content/uploads/20200916123059/SHalfDollarObverse2016head-300x300.jpg'},
      {side:'tail', imgSrc:
'https://media.geeksforgeeks.org/wp-content/uploads/20200916123125/tails-200x200.jpg'}
    ]
  }
 
  constructor(props){
    super(props)
     
    // Responsible to render current updated coin face
    this.state = {
       
      // Track total number of flips
      currFace : null,
      totalFlips:0,
      heads: 0,
      this:"",
      that:""
    }
     
    // Binding context of this keyword
    this.handleClick = this.handleClick.bind(this)
  }
 
   // Function takes array of different faces of a coin
  //  and return a random chosen single face
  choice(arr){
    const randomIdx = Math.floor(Math.random() * arr.length)
    return arr[randomIdx]
  }
   
  // Function responsible to update the states
  // according to users intractions
  flipCoin(){
    const newFace = this.choice(this.props.coins)
    this.setState(curState => {
      const heads = curState.heads + 
      (newFace.side === 'head' ? 1 : 0)
      return {
        currFace:newFace,
        totalFlips:curState.totalFlips + 1,
        heads:heads
      }
    })
  }
 
  handleClick=(e)=>{
    e.preventDefault()
    // this.setState({content:"", img_url:""})
    this.flipCoin()
  }


//   jQuery(document).ready(function($){
//     $('#coin').on('click', function(){
//       var flipResult = Math.random();
//       $('#coin').removeClass();
//       setTimeout(function(){
//         if(flipResult <= 0.5){
//           $('#coin').addClass('heads');
//           console.log('it is head');
//         }
//         else{
//           $('#coin').addClass('tails');
//           console.log('it is tails');
//         }
//       }, 100);
//     });
//   });

newSideHandler = (e) => {
  e.preventDefault()
  this.setState({[e.target.name]: e.target.value})
  console.log(e.target.value)
}




  render(){
    const {currFace, totalFlips, heads} = this.state
    return(
      <div>
        <h2>Let's flip a coin</h2>
        <h4>If youre here youve decided to leave your indecisiveness up to fate. Two choices with a 50/50 chance for either one.</h4>

         <div id="coin">
         <div class="side-a"></div>
         <div class="side-b"></div>
        </div>
        <form>
        <input type="text" name="this"placeholder="Heads" value={this.state.content} onChange={this.newSideHandler}/>
        <input type="text" name="that"placeholder="Tails" value={this.state.img_url} onChange={this.newSideHandler}/>
        {/* <input type="hidden" name="Wall"placeholder="Wall" value={this.state.wall_id} onChange={this.state.wall_id}/> */}
        {/* <button class="button"> SET! <div class="button__horizontal"></div><div class="button__vertical"></div></button> */}
        <Button onClick={this.handleClick}>Flip Me!</Button>
        </form>

         
        {/* If current face exist then show current face */}
        {currFace && <Coin info={currFace} />}
         
        {/* Button to flip the coin  */}
         
         
<p>
          Out of {totalFlips} flips, there have been {heads} heads in favor of {this.state.this} and {totalFlips - heads} tails in favor of {this.state.that}
        </p>
        {this.state.totalFlips?
        <>

    
        <p>Not happy with the outcome? That only means you know truly wanted the other side to land faceup</p>
        
        <p>Flipping a coin is so simple and yet so obvious. Your reaction to the faceup coin will tell you that you what you really wanted.</p>
 
            </>
    :
    <>
    </>
    }
 
      </div>
    )
  }
}
 
export default FlipCoin
const Button = styled.button`
    margin-top: 20px;
    background:  white;
    border: 0px solid;
    border-color: #EF476F;
    width: 300px;
    font-weight: bolder;
    font: inherit;
    line-height: 1;
    padding: 10px;
    border-radius: 3px;
    font-weight: bolder;
   
   
    color: var(--color);
    transition: 0.25s;
    border-color: var(--hover);
    color: black;
    --color: white;
    --hover: white;
    :hover,:focus {
        border-color: #93c9ff;
        -webkit-animation: pulse 1s;
          animation: pulse 1s;
        box-shadow: 0 0 0 2em rgba(255, 255, 255, 0);
    }
    @-webkit-keyframes pulse {
        0% {
            box-shadow: 0 0 0 0 var(--hover);
        }
    }
    @keyframes pulse {
        0% {
            box-shadow: 0 0 0 0 var(--hover);
        }
    }
`
