import React from 'react'

const Search = () => {
  return (
    <div>
          {isSearchModal && (
              <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false)}>
                  <div className="">
                      <Title addClass="text-9xl">Title</Title>
                  </div>
              </OutsideClickHandler>
          )}
    </div>
  )
}

export default Search
