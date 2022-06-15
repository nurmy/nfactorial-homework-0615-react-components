import { useContext } from 'react'
import { DefaultContext } from '../../Context'

import { ItemSpisok } from '../sw-item-spisok'

export const ItemLists = ({ item, children, type }) => {
    const { handleCreateFan } = useContext(DefaultContext)

    return (
        <div key={item.name} className="item-list-layout">
            <div>
                <ItemSpisok>name: {item.name}</ItemSpisok>
                {children}
            </div>
            <div className="item-image-layout">
                {type === 'chars' && (
                    <button
                        className="favorite-button"
                        onClick={() => handleCreateFan(item)}
                    >
                        I am your fan!!
                    </button>
                )}
                <img className="item-image" src={item.url} alt="asd" />
            </div>
        </div>
    )
}
