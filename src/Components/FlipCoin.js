import React,{ Component } from 'react'
import Coin from './Coin'
 
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
      heads: 0
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
 
  handleClick(){
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
{/* <           h1>Click on coin to flip</h1> */}

         
        {/* If current face exist then show current face */}
        {currFace && <Coin info={currFace} />}
         
        {/* Button to flip the coin  */}
        <button onClick={this.handleClick}>Flip Me!</button>
         
         
<p>
          Out of {totalFlips} flips, there have been {heads} heads 
          and {totalFlips - heads} tails
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