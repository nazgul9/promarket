// import React, { Component } from 'react'

// export default class A extends Component {
//     state = {
//         text: JSON.parse(localStorage.getItem('data')) || []
//     }
//     Ad = (i) => {
//         const d = window.confirm("Вы уверены?")
//                 if (d === true){
//         this.state.text.splice(i,1)
//         this.setState((p)=>{
//             return{
//                 t:p.text
//             }
//         })
//         localStorage.setItem('data',this.state.text)
//     }
// }
//     Add = (i) => {
  
//        const naz= prompt("второй текст") 
//        this.state.text.splice(i, 1,naz)
//         this.setState((p)=>{
//             return{
//                 t:p.naz
//             }
//         })
//         localStorage.setItem('data',this.state.text)
//             }
//     render() {

//         return (
//             <>
//              <div className=" mt-2">
//                 <button className="ms-5 m-3 btn btn-success inline-block"style={{marginTop:"50px"}} onClick={() => {
//                     const r = prompt("текст")
//                     this.setState((p) => {
//                         const a = [...p.text, r]
//                         localStorage.setItem('data', JSON.stringify(a))
//                         return {
//                             text: a
//                         }
//                     })
//                 }}>Добавить</button>
//                 {
//                     <div className="container border shadow w-50 inline-block">
//                           {this.state.text.map((s,i) => <h5 className=" mt-3 shadow container">{s} <br />
//                         <button className=" btn btn-secondary text-center mt-5 m-4"onClick={() => this.Add(i)}>изменить</button>
//                         <button className=" btn btn-primary active mt-5 m-4 "onClick={() => this.Ad(i)}>удалить</button>
//                         </h5>
                        
//                         )}
                       
//                     </div>
//                 }
//             </div>
            
//             </>
//         )
//     }
// }
