import styles from './ItemReading.module.css';

export default function ItemReading() {
  return (
     <div className="border w-56 h-72 rounded-2xl overflow-hidden  cursor-pointer relative opacity-50 hover:opacity-50">
        <img src="/imgs/demon-slayer.jpg" className="w-full h-full " />
        <div className="absolute bottom-0 w-full flex flex-col items-center opacity-100 z-10">
          <span className="text-white font-black opacity-100">Kimetsu No Yaiba</span>
          <span>Chapter: 3</span>
          <div>
            <p>page: 5/25</p>
            <progress value="5" max="25"></progress>
          </div>
        </div>
        </div>
  )
}
