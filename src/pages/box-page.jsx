import { boxService } from "../services/box.service";
import { useEffect, useState } from "react";
import { BoxList } from "../cmps/box/box-list";

export function BoxPage() {

  const [boxes, setBoxes] = useState([])

  useEffect(() => {
    onLoadBoxes()
  }, [boxes])

  async function onLoadBoxes() {
    try {
      const boxes = await boxService.query()
      setBoxes(boxes)
      return boxes
    } catch (err) {
      console.log(err);
    }
  }

  async function addBox() {
    try {
      const newBox = boxService.getNewBox()
      await boxService.save(newBox)
      console.log('box saved', newBox);
    } catch (err) {
      console.log('err', err)
    }

  }

  return <section className="home-page">

    <BoxList boxes={boxes} />

    <h1 contentEditable={true} suppressContentEditableWarning={true} style={{ position: 'relative', zIndex: 5 }}>Quiska</h1>

    <button className="btn" style={{position: 'relative', zIndex: 5}} onClick={addBox}>
      Add a box
    </button>

  </section>
}