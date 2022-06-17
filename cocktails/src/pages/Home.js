import React from 'react'
import Pagination from '../common/pagination'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'

const Home = () => {
  return (
    <div>
      <SearchForm />
      <CocktailList />
      <Pagination />
    </div>
  )
}

export default Home
