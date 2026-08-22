import i_agonico from 'assets/img/music_os/info/agonico.png';
import i_aracne_1 from 'assets/img/music_os/info/aracne_1.png';
import i_aracne_2 from 'assets/img/music_os/info/aracne_2.png';
import i_juanma_1 from 'assets/img/music_os/info/juanma_1.png';
import i_juanma_2 from 'assets/img/music_os/info/juanma_2.png';
import i_kulto_muerto from 'assets/img/music_os/info/kulto_muerto.png';
import i_link_bc from 'assets/img/music_os/info/link_bc.png';
import i_link_bsky from 'assets/img/music_os/info/link_bsky.png';
import i_link_instagram from 'assets/img/music_os/info/link_instagram.png';
import i_link_portofolio from 'assets/img/music_os/info/link_portfolio.png';
import i_link_twitter from 'assets/img/music_os/info/link_twitter.png';
import i_los_monstruitos from 'assets/img/music_os/info/los_monstruitos.png';
import i_mythrall from 'assets/img/music_os/info/mythrall.png';
import TintedImg from 'components/TintedImg';
import { $cl } from 'utils';
import { InfoWindowContent } from '../files';
import { useMusicOs } from '../useMusicOsCtx';
import styles from './Info.module.scss';

export interface InfoContentProps {
  content: InfoWindowContent,
}

function InfoContent ({
  content,
}: InfoContentProps) {

  return (
    <div className={styles.content}>
      {content.infoType === 'coven' && <_Coven />}
      {content.infoType === 'aracne' && <_Aracne />}
      {content.infoType === 'juanma' && <_Juanma />}
    </div>
  );
}

interface _CovenProps {
  
}

function _Coven (props: _CovenProps) {
  const ctx = useMusicOs();

  return (
    <div className={styles.profile}>
      <div className={styles.body}>
        <article>
          <p>
            Aracne Phobia es un proyecto formado por <span onClick={() => open('juanma')}>Juan
      Manuel García</span>, músico y productor vinculado a distintas bandas de metal, y <span onClick={() => open('aracne')}>Ana Lázaro Estalot</span>, escritora, creadora visual y vocalista.
      Juntos dan forma a Chaotic-Dysfunctional, un disco conceptual donde música, narrativa e imagen exploran el trauma, la identidad y la supervivencia.
          </p>
        </article>
      </div>
    </div>
  );

  function open (infoType: InfoWindowContent['infoType']) {
    ctx.openWindow(
      {
        type: 'info',
        infoType,
      },
      {
        width: 850,
        height: 600,
      }
    );
  }
}

interface _JuanmaProps {
  
}

function _Juanma (props: _JuanmaProps) {
  return (
    <div className={$cl(styles.profile, styles.juanma)}>
      <div className={styles.header}>
        <img src={i_juanma_1} />

        <div className={styles.profile}>
          <div className={styles.title}>
            The Gore Lover
          </div>
          <div className={styles.name}>
            Juan Manuel García
          </div>
          <div className={styles.links}>
            <a
              href="https://www.instagram.com/juanmarabone/"
              target='_blank'
            >
              <TintedImg src={i_link_instagram} />
              <span>/Juanmarabone</span>
            </a>
            <a
              href="https://x.com/juanmarabonebandcamp.com/"
              target='_blank'
            >
              <TintedImg src={i_link_twitter} />
              <span>@Juanmarabone</span>
            </a>
            <a
              href="https://bsky.app/profile/juanmarabone.bsky.social"
              target='_blank'
            >
              <TintedImg src={i_link_bsky} />
              <span>@Juanmarabone.bsky.social</span>
            </a>
            <a
              href="https://juanmagarciagrunge.bandcamp.com/"
              target='_blank'
            >
              <TintedImg src={i_link_bc} />
              <span>/Juanmagarciagrunge</span>
            </a>
          </div>
        </div>

        <img src={i_juanma_2} />
      </div>
      <div className={styles.body}>
        <article>
          <p>
            En mi vida, siempre hubo música.
          </p>
          <p>
            Antes incluso de saber qué era una guitarra, ya me quedaba clavado delante de cualquier sitio del que saliera una melodía. Mi madre siempre cuenta que, siendo bebé, bastaba con que sonara música en un anuncio para que me quedara atento y empezara a moverme al ritmo de los acordes. Después llegaron los cassettes de mis padres y mis tíos: Pink Floyd. Nirvana. Siniestro Total. Misfits. Parálisis Permanente. Iron Maiden. Eskorbuto… No entendía de géneros ni de escenas. Solo sabía que quería escuchar cada vez más. Y, mirando atrás, creo que esa mezcla explica bastante bien el músico que acabé siendo a día de hoy.
          </p>
          <p>
            Vengo de una familia humilde, así que mi primera guitarra tardó en llegarme a las manos. Sin duda fue el mejor regalo por aprobar Selectividad en los 2000, y a partir de ahí, ya no hubo vuelta atrás. Como cualquier persona novata, decidí montar grupos sin saber apenas tocar.
          </p>
          <p>
            Uno de los primeros fue Erosion. Con ellos grabé mis primeras maquetas, recorrí escenarios y llegué a telonear a algunas bandas que admirábamos. Después vinieron proyectos como Italica y Zigurat: más conciertos, más grabaciones, más canciones y, sobre todo, muchos años aprendiendo a base de tocar y practicar. También conocí a grandes amigos. Algunos siguen tocando conmigo dos décadas después. Entre 2005 y 2008 el punk empezó a ocupar cada vez más espacio entre mis cuerdas. Entré en Rabones, con quienes grabé mi primer LP de larga duración, y, casi al mismo tiempo, experimenté la creación de Monstruitos, quienes acabaron convirtiéndose en el grupo de mi vida, con quienes casi veinte años después, seguimos aquí. Luego apareció el horror punk y ya no hubo remedio: Zombienstein, Kulto Muerto —que continúa en activo— y Nictofilics, otro de esos proyectos que terminaron siendo mucho más que una simple banda para mí. Tras la pausa con Nictofilics volví a moverme. Al power metal con Mythrall. Al metal alternativo con Agónico.
          </p>
          <p>
            Y a un territorio bastante más difícil de etiquetar cuando empecé a hacer música con Aracnephobia. Porque, al final, nunca he sido demasiado bueno quedándome quieto dentro de un género. Durante todos estos años también he mantenido una carrera en solitario. Empezó muy ligada al grunge, pero con el tiempo dejé de intentar ponerle nombre a lo que hacía.
          </p>
          <p>
            Si una canción pide punk, será punk. Si pide metal, será metal. Si pide otra cosa, ya veremos qué demonios es cuando esté terminada. Después de tantos grupos, discos, maquetas, conciertos y cambios de rumbo... probablemente esa siga siendo la única constante: Seguir creando música.
          </p>
        </article>
        <div className={styles.gallery}>
          <img src={i_los_monstruitos} alt="Los monstruitos" />
          <img src={i_mythrall} alt="Mythrall" />
          <img src={i_kulto_muerto} alt="Kulto Muerto" />
          <img src={i_agonico} alt="Agonico" />
        </div>
      </div>
    </div>
  );
}

interface _AracneProps {
  
}

function _Aracne (props: _AracneProps) {
  return (
    <div className={$cl(styles.profile, styles.aracne)}>
      <div className={styles.header}>
        <img src={i_aracne_1} />

        <div className={styles.profile}>
          <div className={styles.title}>
            The Chaos Herself
          </div>
          <div className={styles.name}>
            Ana Lázaro Estalot
          </div>
          <div className={styles.links}>
            <a
              href="https://www.instagram.com/aracnephobia/"
              target='_blank'
            >
              <TintedImg src={i_link_instagram} />
              <span>/Aracnephobia</span>
            </a>
            <a
              href="https://x.com/aracnephobia"
              target='_blank'
            >
              <TintedImg src={i_link_twitter} />
              <span>@Aracnephobia</span>
            </a>
            <a
              href="https://bsky.app/profile/aracnephobia.com"
              target='_blank'
            >
              <TintedImg src={i_link_bsky} />
              <span>@Aracnephobia.com</span>
            </a>
            <a
              href="https://aracnephobia.bandcamp.com/"
              target='_blank'
            >
              <TintedImg src={i_link_bc} />
              <span>/Aracnephobia</span>
            </a>
            <a
              href="https://aracnephobia.com/home"
              target='_blank'
            >
              <TintedImg src={i_link_portofolio} />
              <span>Aracnephobia.com</span>
            </a>
          </div>
        </div>

        <img src={i_aracne_2} />
      </div>
      <div className={styles.body}>
        <article>
          <p>
            Siempre fui una niña introvertida.
          </p>
          <p>
            De esas que pueden pasar horas dentro de su propios pensamientos, construyendo historias, personajes y lugares que no existen en ningún otro lugar, pero con el tiempo aprendí que había formas de sacar todo esto fuera de mí misma.
          </p>
          <p>
            Primero fue la escritura, inspirada por los cuentos de Tolkien que mi padre me narraba desde que tuve la capacidad de comprenderlos.</p>
          <p>
            Después el dibujo, que me permitió tangibilizar aquello que tan vívido sentía en mis memorias.
          </p>
          <p>
            Y, desde antes siquiera saber cómo, la música invadía todos y cada uno de todos mis universos.
          </p>
          <p>
            Pasé por el conservatorio para estudiar canto lírico como soprano, aunque mi relación con la voz había empezado mucho antes. Desde pequeña tenía facilidad para imitar voces, memorizar diálogos completos y reproducir entonaciones casi de manera obsesiva. Gran parte de la culpa la tuvieron las películas de Disney.
          </p>
          <p>
            Me aprendía cada una de las canciones, las voces, los personajes y sus formas de hablar. Pero, sobre todo, me fascinaba descubrir que una historia podía construirse al mismo tiempo con palabras, interpretación, música e imagen.
          </p>
          <p>
            De ahí nació uno de mis primeros grandes sueños: Crear algún día un musical animado. Y ese sueño no ha hecho más que crecer con el tiempo.
          </p>
          <p>
            Mientras seguía escribiendo y dibujando, aprendí a tocar el bajo y el teremín de forma autodidacta. No porque tuviera especialmente claro qué clase de artista quería ser, sino porque siempre he tenido la necesidad de aprender nuevas formas de expresar lo que siento:  Una emoción, una historia, Una idea.
          </p>
          <p>
            Estudié Comunicación y fui ampliando mi formación como comunicadora audiovisual mientras intentaba entender por qué algunas obras conseguían quedarse viviendo dentro de mí mucho después de haber terminado. Acabé encontrando tantas respuestas en las películas de culto como en los videojuegos.
          </p>
          <p>
            David Lynch me enseñó que una historia no siempre tiene que explicarse para poder entenderse.
          </p>
          <p>
            Silent Hill 2 me enseñó que un lugar, un monstruo o incluso un objeto pueden decir cosas sobre una persona que ningún diálogo sería capaz de expresar. Y ahí entendí algo que, en realidad, llevaba haciendo desde niña: pensar mediante símbolos.
          </p>
          <p>
            Supongo que esa es la mejor forma que tengo de explicar lo que hago. Soy, esencialmente, una creadora de universos.
          </p>
          <p>
            Escribir probablemente sea mi mayor virtud, pero interpretar me permite habitarlos y empatizar me ayuda a comprender a quienes viven dentro de ellos. Por eso nunca he conseguido separar del todo la escritura, la ilustración, la música, la interpretación o el audiovisual. Para mí no son disciplinas distintas: Son idiomas diferentes para intentar responder a las mismas preguntas.
          </p>
          <p>
            Siempre he entendido el arte de esa manera: como una de las formas más puras que tenemos de comprender el mundo… Y quizá también de sobrevivir a él. Mucho antes de saber qué significaban palabras como narrativa, simbolismo o dirección artística, ya estaba haciendo exactamente eso: mirar lo que tenía alrededor, intentar entenderlo y convertirlo en una historia.
          </p>
          <p>
            Y de esta forma, experimentando mi propio dolor, el mundo y las emociones, empecé, sin darme cuenta, a crear mi primer albúm de estudio.
          </p>
        </article>
      </div>
    </div>
  );
}



export default InfoContent;
