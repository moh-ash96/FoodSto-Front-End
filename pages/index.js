import Head from '../components/Head'
import Header from '../components/Header'
import Main from '../components/main'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="w-full h-full pb-215 bg-gradient-to-r from-bcg">
    <Head title='FoodSto'/>
    <Header/>
    <Main className="h-full mb-32"/>
    <Footer/>
    </div>
  )
}