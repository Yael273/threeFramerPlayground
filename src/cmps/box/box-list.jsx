import { BoxPreview } from "./box-preview";

export function BoxList({ boxes }) {

    return <ul style={{listStyle: 'none'}} className="box-list">
    {
        boxes.map(box => <li key={box._id}>
             <BoxPreview box={box} />
            <div>
                {/* <button onClick={() => onRemoveBook(book.id)}>Remove</button>
                <button onClick={() => onSelectBook(book.id)}>Select</button> */}
            </div>
        </li>)
    }
</ul>
}