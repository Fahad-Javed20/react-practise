
import './App.css'
import CardCemponent from './components/CardCemponent'

function App() {
  

  return (
    <>
    <div className='flex gap-3'>

    <CardCemponent name = "Fahad Bin Javed" picture = "https://images.unsplash.com/photo-1761069234652-9dd7fc92b845?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500" salary = {40000000} hobbies={["snooker", "badminton", "coding"]}/>
    <CardCemponent name = "Sir Abdul Wahab" picture = "https://images.unsplash.com/photo-1760654339407-970cede10f46?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=500" salary = {40000} hobbies={["abx", "bgv", "nothing"]}/>
    <CardCemponent name = "Aqsa Fatima" picture = "https://images.unsplash.com/photo-1760800327881-c56a3b64ff6b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=500" salary = {400000} hobbies={["hokey", "squash", "playing"]}/>
    <CardCemponent name = "Zulzar Ali" picture = "https://images.unsplash.com/photo-1760611052651-51969c2cd347?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=500" salary = {400000} hobbies={["nothing", "spexial", "cooking"]}/>
    </div>
    </>
  )
}

export default App
