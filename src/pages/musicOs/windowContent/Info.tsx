import i_agonico from 'assets/img/music_os/info/agonico.png';
import i_kulto_muerto from 'assets/img/music_os/info/kulto_muerto.png';
import i_los_monstruitos from 'assets/img/music_os/info/los_monstruitos.png';
import i_mythrall from 'assets/img/music_os/info/mythrall.png';
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
    <p>
      Aracne Phobia es un proyecto formado por <span onClick={() => open('juanma')}>Juan
Manuel García</span>, músico y productor vinculado a distintas bandas de metal, y <span onClick={() => open('aracne')}>Ana Lázaro Estalot</span>, escritora, creadora visual y vocalista.
Juntos dan forma a Chaotic-Dysfunctional, un disco conceptual donde música, narrativa e imagen exploran el trauma, la identidad y la supervivencia.
    </p>
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
  return (<>
    <p>
      En mi vida, siempre hubo música.
Antes incluso de saber qué era una guitarra, ya me quedaba clavado delante de cualquier sitio del que saliera una melodía. Mi madre siempre cuenta que, siendo bebé, bastaba con que sonara música en un anuncio para que me quedara atento y empezara a moverme al ritmo de los acordes.
Después llegaron los cassettes de mis padres y mis tíos: Pink Floyd. Nirvana. Siniestro Total. Misfits. Parálisis Permanente. Iron Maiden. Eskorbuto…
No entendía de géneros ni de escenas. Solo sabía que quería escuchar cada vez más. Y, mirando atrás, creo que esa mezcla explica bastante bien el músico que acabé siendo a día de hoy.
Vengo de una familia humilde, así que mi primera guitarra tardó en llegarme a las manos. Sin duda fue el mejor regalo por aprobar Selectividad en los 2000, y a partir de ahí, ya no hubo vuelta atrás.
Como cualquier persona novata, decidí montar grupos sin saber apenas tocar.
Uno de los primeros fue Erosion. Con ellos grabé mis primeras maquetas, recorrí escenarios y llegué a telonear a algunas bandas que admirábamos. Después vinieron proyectos como Italica y Zigurat: más conciertos, más grabaciones, más canciones y, sobre todo, muchos años aprendiendo a base de tocar y practicar.
También conocí a grandes amigos. Algunos siguen tocando conmigo dos décadas después.
Entre 2005 y 2008 el punk empezó a ocupar cada vez más espacio entre mis cuerdas. Entré en Rabones, con quienes grabé mi primer LP de larga duración, y, casi al mismo tiempo, experimenté la creación de Monstruitos, quienes acabaron convirtiéndose en el grupo de mi vida, con quienes casi veinte años después, seguimos aquí.
Luego apareció el horror punk y ya no hubo remedio: Zombienstein, Kulto Muerto —que continúa en activo— y Nictofilics, otro de esos proyectos que terminaron siendo mucho más que una simple banda para mí.
Tras la pausa con Nictofilics volví a moverme.
Al power metal con Mythrall.
Al metal alternativo con Agónico.

Y a un territorio bastante más difícil de etiquetar cuando empecé a hacer música con Aracnephobia.
Porque, al final, nunca he sido demasiado bueno quedándome quieto dentro de un género.
Durante todos estos años también he mantenido una carrera en solitario. Empezó muy ligada al grunge, pero con el tiempo dejé de intentar ponerle nombre a lo que hacía.
Si una canción pide punk, será punk. Si pide metal, será metal. Si pide otra cosa, ya veremos qué demonios es cuando esté terminada.
Después de tantos grupos, discos, maquetas, conciertos y cambios de rumbo... probablemente esa siga siendo la única constante: Seguir creando música.
    </p>
    <div className={styles.gallery}>
      <img src={i_los_monstruitos} alt="Los monstruitos" />
      <img src={i_mythrall} alt="Mythrall" />
      <img src={i_kulto_muerto} alt="Kulto Muerto" />
      <img src={i_agonico} alt="Agonico" />
    </div>
  </>);
}

interface _AracneProps {
  
}

function _Aracne (props: _AracneProps) {
  return (
    <p>
      Siempre fui una niña introvertida.
De esas que pueden pasar horas dentro de su propios pensamientos, construyendo historias, personajes y lugares que no existen en ningún otro lugar, pero con el tiempo aprendí que había formas de sacar todo esto fuera de mí misma.
Primero fue la escritura, inspirada por los cuentos de Tolkien que mi padre me narraba desde que tuve la capacidad de comprenderlos.
Después el dibujo, que me permitió tangibilizar aquello que tan vívido sentía en mis memorias. 
Y, desde antes siquiera saber cómo, la música invadía todos y cada uno de todos mis universos.
Pasé por el conservatorio para estudiar canto lírico como soprano, aunque mi relación con la voz había empezado mucho antes. Desde pequeña tenía facilidad para imitar voces, memorizar diálogos completos y reproducir entonaciones casi de manera obsesiva. Gran parte de la culpa la tuvieron las películas de Disney.
Me aprendía cada una de las canciones, las voces, los personajes y sus formas de hablar. Pero, sobre todo, me fascinaba descubrir que una historia podía construirse al mismo tiempo con palabras, interpretación, música e imagen.
De ahí nació uno de mis primeros grandes sueños: Crear algún día un musical animado.
Y ese sueño no ha hecho más que crecer con el tiempo.
Mientras seguía escribiendo y dibujando, aprendí a tocar el bajo y el teremín de forma autodidacta. No porque tuviera especialmente claro qué clase de artista quería ser, sino porque siempre he tenido la necesidad de aprender nuevas formas de expresar lo que siento:  Una emoción, una historia, Una idea.
Estudié Comunicación y fui ampliando mi formación como comunicadora audiovisual mientras intentaba entender por qué algunas obras conseguían quedarse viviendo dentro de mí mucho después de haber terminado.
Acabé encontrando tantas respuestas en las películas de culto como en los videojuegos.
David Lynch me enseñó que una historia no siempre tiene que explicarse para poder entenderse.
Silent Hill 2 me enseñó que un lugar, un monstruo o incluso un objeto pueden decir cosas sobre una persona que ningún diálogo sería capaz de expresar.
Y ahí entendí algo que, en realidad, llevaba haciendo desde niña: pensar mediante símbolos.
Supongo que esa es la mejor forma que tengo de explicar lo que hago.
Soy, esencialmente, una creadora de universos.
Escribir probablemente sea mi mayor virtud, pero interpretar me permite habitarlos y empatizar me ayuda a comprender a quienes viven dentro de ellos.
Por eso nunca he conseguido separar del todo la escritura, la ilustración, la música, la interpretación o el audiovisual. Para mí no son disciplinas distintas: Son idiomas diferentes para intentar responder a las mismas preguntas.
Siempre he entendido el arte de esa manera: como una de las formas más puras que tenemos de comprender el mundo… Y quizá también de sobrevivir a él.
Mucho antes de saber qué significaban palabras como narrativa, simbolismo o dirección artística, ya estaba haciendo exactamente eso: mirar lo que tenía alrededor, intentar entenderlo y convertirlo en una historia.
Y de esta forma, experimentando mi propio dolor, el mundo y las emociones, empecé, sin darme cuenta, a crear mi primer albúm de estudio.
    </p>
  );
}



export default InfoContent;
