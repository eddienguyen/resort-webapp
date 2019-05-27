import React, { useContext } from 'react';
import { RoomContext } from 'context';
import './RoomFilter.scss';

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
}

export default function RoomFilter() {
    const context = useContext(RoomContext);
    const {
        type,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        capacity,
        pets,
        breakfast,
        handleChange,
        rooms
    } = context;
    let types = ['all', ...getUnique(rooms, 'type')];
    let capacities = getUnique(rooms, 'capacity');

    let typeOptions = types.map((type, key) => <option key={key} value={type}>{type}</option>)

    let capacityOptions = capacities.map((capacity, key) => <option key={key} value={capacity}>{capacity}</option>)


    return (
        <form className="filterForm">
            {/* type */}
            <div className="formGroup selectGroup">
                <label htmlFor="type" >room type</label>
                <select
                    name="type"
                    id="type"
                    value={type}
                    className="formControl"
                    onChange={handleChange}
                >
                    {typeOptions}
                </select>
            </div>
            {/* type */}

            {/* Guests */}
            <div className="formGroup selectGroup">
                <label htmlFor="capacity" > Guests</label>
                <select
                    name="capacity"
                    id="capacity"
                    value={capacity}
                    className="formControl"
                    onChange={handleChange}
                >
                    {capacityOptions}
                </select>
            </div>
            {/* Guests */}

            {/* Price */}
            <div className="formGroup">
                <label htmlFor="price">price: ${price}</label>
                <input
                    name="price"
                    id="price"
                    className="formControl"
                    onChange={handleChange}
                    type="range"
                    min={minPrice}
                    max={maxPrice}
                    value={price}
                />
            </div>
            {/* Price */}

            {/* Size */}
            <div className="formGroup">
                <label htmlFor="size">size</label>
                <div className="sizeInputs">
                    <input
                        name="minSize"
                        id="size"
                        className="sizeInput"
                        onChange={handleChange}
                        type="number"
                        value={minSize}
                    />
                    <input
                        name="maxSize"
                        id="size"
                        className="sizeInput"
                        onChange={handleChange}
                        type="number"
                        value={maxSize}
                    />
                </div>
            </div>
            {/* Size */}


            <div className="formGroup">
                {/* Breakfast */}
                <div className="singleExtra">
                    <input
                        name="breakfast"
                        id="breakfast"
                        onChange={handleChange}
                        type="checkbox"
                        checked={breakfast}
                    />
                    <label htmlFor="breakfast">breakfast include</label>
                </div>
                {/* Breakfast */}
                {/* pets */}
                <div className="singleExtra">
                    <input
                        name="pets"
                        id="pets"
                        onChange={handleChange}
                        type="checkbox"
                        checked={pets}
                    />
                    <label htmlFor="pets">pets</label>
                </div>
            </div>
            {/* pets */}


        </form>
    );
}