import React from 'react'
import OutsideClickHandler from 'react-outside-click-handler';
import Title from "../ui/Title";

const Search = ({setIsSearchModal}) => {
  return (
    <div>
          <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false)}>
              <div className="">
                  <Title addClass="text-9xl">Title</Title>
              </div>
          </OutsideClickHandler>
    </div>
  )
}

export default Search
