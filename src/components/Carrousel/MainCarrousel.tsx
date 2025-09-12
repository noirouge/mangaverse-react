import styles from './MainCarrousel.module.css';
import clsx from 'clsx';

export default function MainCarrousel() {
  return (
    <div className={styles.container}>
      <img className={styles.fullSize} src="/imgs/trending-carrousel-photo.jpg" alt="carrousel-photo" />
      <div className={clsx(styles.fullSize, styles.info)}>
        <div className='absolute bottom-0 mb-8'>
        <h2 className={styles.title}>Kimetsu No Yaiba</h2>
<span className='text-gray-300 font-extrabold text-sm opacity-50'>Chapters: 50</span>
<p className='line-clamp-4 '>
  Cuando su familia es asesinada por un demonio y solo su hermana sobrevive convertida en demonio, el joven tanjiro debera convertir en un cazador de demonios para poder curar a su hermana y vengar a su familia, en el camino conocera muchos amigos con los que tendra increibles aventuras
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum odit obcaecati quia suscipit, repellendus in, autem nihil explicabo aliquam nesciunt sed nemo cum, natus voluptatibus eveniet sequi? Qui nobis, velit similique tempora ipsa dolorum tempore est blanditiis beatae vitae facilis quam, officiis quasi exercitationem odio veritatis quidem laboriosam doloremque expedita asperiores quia magnam. Cupiditate, officia! Quisquam sapiente non nemo nobis, doloremque inventore voluptates optio modi nisi exercitationem tenetur! Culpa quidem ipsum quis commodi odit explicabo modi est alias exercitationem officia vitae hic eveniet inventore, tenetur itaque placeat quasi magni eligendi accusamus blanditiis labore ipsa facere earum consectetur? Distinctio, delectus provident!

</p>
            </div>
        </div>
        <div className='absolute bottom-0 space-x-2 w-full flex justify-center items-center mb-1'>
          <div className='h-3 w-3 border rounded-full hover:w-4 hover:h-4 z-10 bg-white'></div>
          <div className='h-3 w-3 border rounded-full hover:w-4 hover:h-4 z-10 '></div>
          <div className='h-3 w-3 border rounded-full hover:w-4 hover:h-4 z-10 '></div>
          <div className='h-3 w-3 border rounded-full hover:w-4 hover:h-4 z-10 '></div>
          <div className='h-3 w-3 border rounded-full hover:w-4 hover:h-4 z-10 '></div>


          
          </div>
    </div>
  )
}
