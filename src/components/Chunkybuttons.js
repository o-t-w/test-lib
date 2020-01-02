import React from 'react';

function ChunkyButtons({ defaultValue, changeHandler, legend, options, name }) {
    return (
        <fieldset className="gg-c-chunky-buttons">
            <legend className="gg-c-chunky-buttons__legend">{legend}</legend>
            <ol className="gg-c-chunky-buttons__list">
                {options.map((option) => {
                    return (
                        <li key={option.id} className="gg-c-chunky-buttons__option">
                            <input checked={defaultValue === option.value} name={name} type="radio" id={option.id} onChange={changeHandler} className="gg-c-chunky-buttons__radio" value={option.value} />
                            <label className="gg-c-chunky-buttons__button" htmlFor={option.id}>
                                <span className="gg-c-chunky-buttons__text">{option.label}</span>
                            </label>
                        </li>
                    )
                })}

            </ol>
        </fieldset>
    )
}

export default ChunkyButtons;