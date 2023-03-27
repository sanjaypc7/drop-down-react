import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [item, setItem] = useState([])
  const [smenu, setSubmenu] = useState([])
  const [smenu2, setSubmenu2] = useState([])

  const getProduct = async () => {
    await fetch('/db.json')
      .then((data) => {
        data.json()
          .then((result) => {
            setItem(result.items)
          })

      })
  }

  function getId(sId) {

    let sub = item.find(sitem => sitem.id == sId)

     setSubmenu(sub.submenu)    
  }
  function getId2(subId) {
    let sub = smenu.find(sitem => sitem.id == subId

    )
   setSubmenu2(sub.submenu2)
  }

  useEffect(() => {
    getProduct()
  }, [])
  return (
    <div className="App row">
      <div className="col-4">
        <ul id="menu">
          <li className="parent"><a href=""> Shop By Category</a>
            <ul className='child'>
              {
                item && item.map(data => (
                  <>
                    <li onMouseOver={() => getId(data.id)} className="parent"><a href="#">{data.title} <span className="expand"></span></a>

                      <ul className="child">
                        {
                          smenu && smenu.map(val => (
                            <>
                              <li onMouseOver={() => getId2(val.id)} className="parent"><a href="#">{val.name}<span className="expand"></span></a>
                                <ul className="child">
                                  {
                                   smenu2 && smenu2.map(data => (
                                      <>
                                        <li className="parent"><a href="#">{data.value}<span className="expand"></span></a></li>
                                      </>
                                    )
                                    )
                                  }
                                </ul>
                              </li>
                            </>
                          )
                          )}
                      </ul>
                    </li>
                 </>

               )
                )}
            </ul>
          </li>
        </ul>
      </div>
      <div className='offer   col-8 '>
       <h2><i class="fa-solid fa-tag "></i> &nbsp;OFFER</h2>
      </div>
    </div>
  );
}

export default App;
