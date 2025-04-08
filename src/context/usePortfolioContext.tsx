import useIndices from "hooks/useIndices";
import { Context, createContext, useContext, useEffect, useMemo, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import branding_af_cartas from "assets/portfolio/branding/aracne_phobia/cartas_borde.png";
import branding_af_iconos from "assets/portfolio/branding/aracne_phobia/iconos.png";
import branding_af_iconos2 from "assets/portfolio/branding/aracne_phobia/iconos_2.png";
import branding_af_iconos3 from "assets/portfolio/branding/aracne_phobia/iconos_3.png";
import branding_af_imagen from "assets/portfolio/branding/aracne_phobia/imagen.png";
import branding_af_logo from "assets/portfolio/branding/aracne_phobia/logo.png";
import branding_af_logo_spider from "assets/portfolio/branding/aracne_phobia/logo_spider.png";
import branding_af_paneles from "assets/portfolio/branding/aracne_phobia/paneles.png";
import branding_af_tipos from "assets/portfolio/branding/aracne_phobia/tipos.png";
import branding_af_brand_bible from "assets/portfolio/branding/aracne_phobia/brand_bible.pdf";

import branding_delugram_bible_1 from "assets/portfolio/branding/delugram/bible_1.png";
import branding_delugram_bible_2 from "assets/portfolio/branding/delugram/bible_2.png";
import branding_delugram_bible_3 from "assets/portfolio/branding/delugram/bible_3.png";
import branding_delugram_bible_4 from "assets/portfolio/branding/delugram/bible_4.png";
import branding_delugram_bible_5 from "assets/portfolio/branding/delugram/bible_5.png";
import branding_delugram_bible_6 from "assets/portfolio/branding/delugram/bible_6.png";
import branding_delugram_bible_7 from "assets/portfolio/branding/delugram/bible_7.png";
import branding_delugram_bible_8 from "assets/portfolio/branding/delugram/bible_8.png";
import branding_delugram_bible_9 from "assets/portfolio/branding/delugram/bible_9.png";
import branding_delugram_bible_pdf from "assets/portfolio/branding/delugram/bible.pdf";
import branding_delugram_logo_gif from "assets/portfolio/branding/delugram/logo.gif";
import branding_delugram_logo_mp4 from "assets/portfolio/branding/delugram/logo.mp4";
import branding_delugram_logo_mp4_thumbnail from "assets/portfolio/branding/delugram/logo.thumbnail.jpg";

import branding_farmacia_tecuida from "assets/portfolio/branding/farmacia/tecuida.pdf";
import branding_farmacia_sdm from "assets/portfolio/branding/farmacia/sancho_de_mesa.pdf";
import branding_farmacia_logo_tecuida from "assets/portfolio/branding/farmacia/logo_tecuida.mp4";
import branding_farmacia_logo_tecuida_thumbnail from "assets/portfolio/branding/farmacia/logo_tecuida.thumbnail.jpg";
import branding_farmacia_lettering from "assets/portfolio/branding/farmacia/lettering.mp4";
import branding_farmacia_lettering_thumbnail from "assets/portfolio/branding/farmacia/lettering.thumbnail.jpg";

import branding_jlazz_logo from "assets/portfolio/branding/jlazz/logo.png";
import branding_jlazz_logo_bg from "assets/portfolio/branding/jlazz/logo-bg.png";
import branding_jlazz_logo_mp4 from "assets/portfolio/branding/jlazz/logo-006.mp4";
import branding_jlazz_logo_mp4_thumbnail from "assets/portfolio/branding/jlazz/logo-006.thumbnail.jpg";
import branding_jlazz_portrait from "assets/portfolio/branding/jlazz/portrait.png";
import branding_jlazz_transition from "assets/portfolio/branding/jlazz/transition-sound.mp4";
import branding_jlazz_transition_thumbnail from "assets/portfolio/branding/jlazz/transition-sound.thumbnail.jpg";

import branding_proyectos_doppie from "assets/portfolio/branding/proyectos/doppie.jpg";
import branding_proyectos_fun_n_food from "assets/portfolio/branding/proyectos/fun_n_food.png";
import branding_proyectos_example_packaging from "assets/portfolio/branding/proyectos/example_packaging.png";

import drawing_conceptart_bom_3 from "assets/portfolio/drawing/concept_art/book_of_mistery/3.jpg";
import drawing_conceptart_bom_dana from "assets/portfolio/drawing/concept_art/book_of_mistery/dana.jpg";
import drawing_conceptart_bom_dana_elect from "assets/portfolio/drawing/concept_art/book_of_mistery/dana_elect.jpg";
import drawing_conceptart_bom_elec from "assets/portfolio/drawing/concept_art/book_of_mistery/elec.jpg";
import drawing_conceptart_bom_elect1 from "assets/portfolio/drawing/concept_art/book_of_mistery/elect1.jpg";
import drawing_conceptart_bom_elect3 from "assets/portfolio/drawing/concept_art/book_of_mistery/elect3.jpg";
import drawing_conceptart_bom_lloyd from "assets/portfolio/drawing/concept_art/book_of_mistery/lloyd.jpg";
import drawing_conceptart_bom_props from "assets/portfolio/drawing/concept_art/book_of_mistery/props.jpg";
import drawing_conceptart_bom_virginia from "assets/portfolio/drawing/concept_art/book_of_mistery/virginia.jpg";

import drawing_conceptart_aracnephobia1 from "assets/portfolio/drawing/concept_art/aracnephobia/1.png";
import drawing_conceptart_aracnephobia10 from "assets/portfolio/drawing/concept_art/aracnephobia/10.png";
import drawing_conceptart_aracnephobia11 from "assets/portfolio/drawing/concept_art/aracnephobia/11.png";
import drawing_conceptart_aracnephobia12 from "assets/portfolio/drawing/concept_art/aracnephobia/12.png";
import drawing_conceptart_aracnephobia13 from "assets/portfolio/drawing/concept_art/aracnephobia/13.png";
import drawing_conceptart_aracnephobia14 from "assets/portfolio/drawing/concept_art/aracnephobia/14.png";
import drawing_conceptart_aracnephobia15 from "assets/portfolio/drawing/concept_art/aracnephobia/15.png";
import drawing_conceptart_aracnephobia16 from "assets/portfolio/drawing/concept_art/aracnephobia/16.png";
import drawing_conceptart_aracnephobia17 from "assets/portfolio/drawing/concept_art/aracnephobia/17.png";
import drawing_conceptart_aracnephobia18 from "assets/portfolio/drawing/concept_art/aracnephobia/18.png";
import drawing_conceptart_aracnephobia19 from "assets/portfolio/drawing/concept_art/aracnephobia/19.png";
import drawing_conceptart_aracnephobia2 from "assets/portfolio/drawing/concept_art/aracnephobia/2.png";
import drawing_conceptart_aracnephobia20 from "assets/portfolio/drawing/concept_art/aracnephobia/20.png";
import drawing_conceptart_aracnephobia3 from "assets/portfolio/drawing/concept_art/aracnephobia/3.png";
import drawing_conceptart_aracnephobia4 from "assets/portfolio/drawing/concept_art/aracnephobia/4.png";
import drawing_conceptart_aracnephobia5 from "assets/portfolio/drawing/concept_art/aracnephobia/5.png";
import drawing_conceptart_aracnephobia6 from "assets/portfolio/drawing/concept_art/aracnephobia/6.png";
import drawing_conceptart_aracnephobia7 from "assets/portfolio/drawing/concept_art/aracnephobia/7.png";
import drawing_conceptart_aracnephobia8 from "assets/portfolio/drawing/concept_art/aracnephobia/8.png";
import drawing_conceptart_aracnephobia9 from "assets/portfolio/drawing/concept_art/aracnephobia/9.png";

import drawing_conceptart_delugram_corazon from "assets/portfolio/drawing/concept_art/delugram/corazon.png";
import drawing_conceptart_delugram_fernanda_susto from "assets/portfolio/drawing/concept_art/delugram/fernanda_susto.png";
import drawing_conceptart_delugram_fern_sorpresa from "assets/portfolio/drawing/concept_art/delugram/fern_sorpresa.png";
import drawing_conceptart_delugram_img_3559 from "assets/portfolio/drawing/concept_art/delugram/img_3559.png";
import drawing_conceptart_delugram_img_3564 from "assets/portfolio/drawing/concept_art/delugram/img_3564.png";
import drawing_conceptart_delugram_img_3567 from "assets/portfolio/drawing/concept_art/delugram/img_3567.png";
import drawing_conceptart_delugram_img_3570 from "assets/portfolio/drawing/concept_art/delugram/img_3570.png";
import drawing_conceptart_delugram_img_4386 from "assets/portfolio/drawing/concept_art/delugram/img_4386.png";
import drawing_conceptart_delugram_img_4387 from "assets/portfolio/drawing/concept_art/delugram/img_4387.png";
import drawing_conceptart_delugram_img_4428 from "assets/portfolio/drawing/concept_art/delugram/img_4428.png";
import drawing_conceptart_delugram_img_4430 from "assets/portfolio/drawing/concept_art/delugram/img_4430.png";
import drawing_conceptart_delugram_img_4432 from "assets/portfolio/drawing/concept_art/delugram/img_4432.png";
import drawing_conceptart_delugram_img_4434 from "assets/portfolio/drawing/concept_art/delugram/img_4434.png";
import drawing_conceptart_delugram_img_4472 from "assets/portfolio/drawing/concept_art/delugram/img_4472.png";
import drawing_conceptart_delugram_img_4473 from "assets/portfolio/drawing/concept_art/delugram/img_4473.png";
import drawing_conceptart_delugram_love_2 from "assets/portfolio/drawing/concept_art/delugram/love_2.png";
import drawing_conceptart_delugram_maria_fernanda from "assets/portfolio/drawing/concept_art/delugram/maria_fernanda.png";
import drawing_conceptart_delugram_max from "assets/portfolio/drawing/concept_art/delugram/max.png";
import drawing_conceptart_delugram_max2 from "assets/portfolio/drawing/concept_art/delugram/max2.png";
import drawing_conceptart_delugram_max_6 from "assets/portfolio/drawing/concept_art/delugram/max_6.png";
import drawing_conceptart_delugram_max_suffer from "assets/portfolio/drawing/concept_art/delugram/max_suffer.png";
import drawing_conceptart_delugram_max_y_travis from "assets/portfolio/drawing/concept_art/delugram/max_y_travis.png";
import drawing_conceptart_delugram_telefono from "assets/portfolio/drawing/concept_art/delugram/telefono.png";
import drawing_conceptart_delugram_travis from "assets/portfolio/drawing/concept_art/delugram/travis.png";
import drawing_conceptart_delugram_travis_2 from "assets/portfolio/drawing/concept_art/delugram/travis_2.png";
import drawing_conceptart_delugram_travis_buscando from "assets/portfolio/drawing/concept_art/delugram/travis_buscando.png";
import drawing_conceptart_delugram_travis_feliz from "assets/portfolio/drawing/concept_art/delugram/travis_feliz.png";
import drawing_conceptart_delugram_travis_frustrado from "assets/portfolio/drawing/concept_art/delugram/travis_frustrado.png";
import drawing_conceptart_delugram_travis_preocupado from "assets/portfolio/drawing/concept_art/delugram/travis_preocupado.png";
import drawing_conceptart_delugram_uiux from "assets/portfolio/drawing/concept_art/delugram/uiux.png";
import drawing_conceptart_delugram_uiux2 from "assets/portfolio/drawing/concept_art/delugram/uiux2.png";

import drawing_conceptart_dc_img_4447 from "assets/portfolio/drawing/concept_art/dolls_chest/img_4447.png";
import drawing_conceptart_dc_img_4448 from "assets/portfolio/drawing/concept_art/dolls_chest/img_4448.png";
import drawing_conceptart_dc_img_4449 from "assets/portfolio/drawing/concept_art/dolls_chest/img_4449.png";
import drawing_conceptart_dc_img_4450 from "assets/portfolio/drawing/concept_art/dolls_chest/img_4450.png";

import drawing_digital_466794376_9413315175350647_7482732383852466772_n from "assets/portfolio/drawing/digital/466794376_9413315175350647_7482732383852466772_n.jpg";
import drawing_digital_466954493_9413315695350595_2470295891001182443_n from "assets/portfolio/drawing/digital/466954493_9413315695350595_2470295891001182443_n.jpg";
import drawing_digital_466962932_9413315718683926_2934517381596426580_n from "assets/portfolio/drawing/digital/466962932_9413315718683926_2934517381596426580_n.jpg";
import drawing_digital_480445171_931030712576154_8397980858810885146_n from "assets/portfolio/drawing/digital/480445171_931030712576154_8397980858810885146_n.jpg";
import drawing_digital_480867448_935132035499355_8039105087864904742_n from "assets/portfolio/drawing/digital/480867448_935132035499355_8039105087864904742_n.jpg";
import drawing_digital_481091585_936381998707692_3849161234069171315_n from "assets/portfolio/drawing/digital/481091585_936381998707692_3849161234069171315_n.jpg";
import drawing_digital_bu from "assets/portfolio/drawing/digital/bu.jpeg";
import drawing_digital_crismasinada from "assets/portfolio/drawing/digital/crismasinada.jpg";
import drawing_digital_img_4452 from "assets/portfolio/drawing/digital/img_4452.png";
import drawing_digital_img_4453 from "assets/portfolio/drawing/digital/img_4453.png";
import drawing_digital_img_4454 from "assets/portfolio/drawing/digital/img_4454.png";
import drawing_digital_img_4455 from "assets/portfolio/drawing/digital/img_4455.png";
import drawing_digital_img_4469 from "assets/portfolio/drawing/digital/img_4469.png";
import drawing_digital_img_4471 from "assets/portfolio/drawing/digital/img_4471.png";
import drawing_digital_la_princesa_del_pa_s_de_las_maravillas from "assets/portfolio/drawing/digital/la_princesa_del_país_de_las_maravillas.jpg";

import drawing_editorial_ilustracio_n_sin_ti_tulo from "assets/portfolio/drawing/editorial/ilustración_sin_título.png";
import drawing_editorial_ilustracio_n_sin_ti_tulo__10_ from "assets/portfolio/drawing/editorial/ilustración_sin_título_(10).png";
import drawing_editorial_ilustracio_n_sin_ti_tulo__12_ from "assets/portfolio/drawing/editorial/ilustración_sin_título_(12).png";
import drawing_editorial_ilustracio_n_sin_ti_tulo__13_ from "assets/portfolio/drawing/editorial/ilustración_sin_título_(13).png";
import drawing_editorial_ilustracio_n_sin_ti_tulo__14_ from "assets/portfolio/drawing/editorial/ilustración_sin_título_(14).png";
import drawing_editorial_ilustracio_n_sin_ti_tulo__17_ from "assets/portfolio/drawing/editorial/ilustración_sin_título_(17).png";
import drawing_editorial_ilustracio_n_sin_ti_tulo__18_ from "assets/portfolio/drawing/editorial/ilustración_sin_título_(18).png";
import drawing_editorial_ilustracio_n_sin_ti_tulo__19_ from "assets/portfolio/drawing/editorial/ilustración_sin_título_(19).png";
import drawing_editorial_img_3284 from "assets/portfolio/drawing/editorial/img_3284.png";
import drawing_editorial_img_4456 from "assets/portfolio/drawing/editorial/img_4456.png";
import drawing_editorial_img_4457 from "assets/portfolio/drawing/editorial/img_4457.png";
import drawing_editorial_img_4458 from "assets/portfolio/drawing/editorial/img_4458.png";
import drawing_editorial_img_4459 from "assets/portfolio/drawing/editorial/img_4459.png";
import drawing_editorial_img_4460 from "assets/portfolio/drawing/editorial/img_4460.png";
import drawing_editorial_img_4461 from "assets/portfolio/drawing/editorial/img_4461.png";
import drawing_editorial_img_4462 from "assets/portfolio/drawing/editorial/img_4462.png";
import drawing_editorial_img_4463 from "assets/portfolio/drawing/editorial/img_4463.png";
import drawing_editorial_img_4464 from "assets/portfolio/drawing/editorial/img_4464.png";
import drawing_editorial_img_4465 from "assets/portfolio/drawing/editorial/img_4465.png";
import drawing_editorial_img_4466 from "assets/portfolio/drawing/editorial/img_4466.png";
import drawing_editorial_img_4467 from "assets/portfolio/drawing/editorial/img_4467.png";

import drawing_tatuaje_img_4451 from "assets/portfolio/drawing/tatuaje/img_4451.png";
import drawing_tatuaje_img_4470 from "assets/portfolio/drawing/tatuaje/img_4470.png";

import reels_blanco_sin_fondo from "assets/portfolio/reels/blanco_sin_fondo.mp4";
import reels_blanco_sin_fondo_thumbnail from "assets/portfolio/reels/blanco_sin_fondo.thumbnail.jpg";
import reels_branding from "assets/portfolio/reels/branding.mp4";
import reels_branding_thumbnail from "assets/portfolio/reels/branding.thumbnail.jpg";
import reels_espera_ouija from "assets/portfolio/reels/espera_ouija.mp4";
import reels_espera_ouija_thumbnail from "assets/portfolio/reels/espera_ouija.thumbnail.jpg";
import reels_esto_es_aracne_phobia_thumbnail from "assets/portfolio/reels/esto_es_aracne_phobia.thumbnail.jpg";
import reels_intro from "assets/portfolio/reels/intro.mp4";
import reels_intro_thumbnail from "assets/portfolio/reels/intro.thumbnail.jpg";
import reels_intros_videos_fecha from "assets/portfolio/reels/intros_videos_fecha.mp4";
import reels_intros_videos_fecha_thumbnail from "assets/portfolio/reels/intros_videos_fecha.thumbnail.jpg";
import reels_intro_mejorada from "assets/portfolio/reels/intro_mejorada.mp4";
import reels_intro_mejorada_thumbnail from "assets/portfolio/reels/intro_mejorada.thumbnail.jpg";
import reels_multimedia1 from "assets/portfolio/reels/multimedia1.mp4";
import reels_multimedia1_thumbnail from "assets/portfolio/reels/multimedia1.thumbnail.jpg";
import reels_zona from "assets/portfolio/reels/zona.mp4";
import reels_zona_thumbnail from "assets/portfolio/reels/zona.thumbnail.jpg";

export interface OsWindow {
    content: WindowContent;
    id: string;
    position: { top: number, left: number };
    isMinimized: boolean;
    isMaximized: boolean;
}

export interface FolderWindow {
    type: 'folder';
    folder: Folder;
}

export interface ImageWindow {
    type: 'image';
    images: ImageFile[];
    selectedIndex: number;
}

export interface VideoWindow {
    type: 'video';
    videos: VideoFile[];
    selectedIndex: number;
}

export interface PdfWindow {
    type: 'pdf';
    pdf: PdfFile;
}

export type WindowContent = FolderWindow
    | ImageWindow
    | VideoWindow
    | PdfWindow
    ;

interface OsContextState {
    activeWindowId: string | null;
    desktopFiles: OsFile[];
    openWindows: {[uuid: string]: OsWindow};
    windowIndices: Record<string, number>;
    focusedWindow: string | null;
    openWindow: (content: WindowContent) => string;
    updateWindow: (id: string, window: OsWindow) => void;
    closeWindow: (id: string) => void;
    setWindowOnTop: (key: string) => void;
}

const OsContext = createContext<OsContextState>({} as OsContextState);
const useOsContext = () => useContext(OsContext);

const OsContextProvider = ({ children }: any) => {
    const [state, setState] = useState<OsContextState>({
        activeWindowId: null,
        desktopFiles: [
            getBrandingFolder(),
            getDrawingFolder(),
            getReelsFolder(),
        ],
        openWindows: {} as {[uuid: string]: OsWindow},
    } as OsContextState);
    
    const {
        indices: windowIndices,
        focused: focusedWindow,
        setOnTop: setWindowOnTop
    } = useIndices(Object.keys(state.openWindows));

    const value: OsContextState = useMemo(() => {
        function openWindow (content: WindowContent) : string {
            const uuid = uuidv4();
            setState(prev => ({
                ...prev,
                openWindows: {
                    ...prev.openWindows,
                    [uuid]: {
                        id: uuid,
                        content,
                        position: {
                            top: Math.floor(Math.random() * 100),
                            left: Math.floor(Math.random() * 300),
                        },
                        isMinimized: false,
                        isMaximized: false,
                    },
                }
            }));
            return uuid;
        }

        function updateWindow (id: string, window: OsWindow) {
            setState(prev => ({
                ...prev,
                openWindows: {
                    ...prev.openWindows,
                    [id]: window,
                }
            }));
        }

        function closeWindow (id: string) {
            setState(prev => {
                const openWindows = { ...prev.openWindows };
                delete openWindows[id];

                return {
                    ...prev,
                    openWindows,
                };
            })
        }
        return {
            ...state,
            windowIndices,
            focusedWindow,
            openWindow,
            updateWindow,
            closeWindow,
            setWindowOnTop,
        }
    }, [state, windowIndices, setWindowOnTop]);

    return (
        <OsContext.Provider value={value}>
            {children}
        </OsContext.Provider>
    );
}

export {
    useOsContext,
    OsContextProvider,
};

export interface BaseFile {
    type: string;
    name: string;
    parentFolder?: Folder | null;
}

export interface Folder extends BaseFile {
    type: 'folder';
    display: 'list' | 'gallery';
    content: OsFile[];
}

export interface ImageFile extends BaseFile {
    type: 'image';
    content: string;
}

export interface VideoFile extends BaseFile {
    type: 'video';
    host?: 'youtube';
    content: string;
    thumbnail: string;
}

export interface PdfFile extends BaseFile {
    type: 'pdf';
    content: string;
}

export type OsFile = Folder
    | ImageFile
    | VideoFile
    | PdfFile
    ;

function getBrandingFolder () : Folder {
    const folder: Folder = {
        type: 'folder',
        name: "Branding",
        display: 'list',
        parentFolder: null,
        content: [
            {
                type: 'folder',
                name: "Aracne Phobia",
                display: 'gallery',
                content: [
                    {
                        type: 'image',
                        name: "cartas_borde",
                        content: branding_af_cartas,
                    },
                    {
                        type: 'image',
                        name: "iconos",
                        content: branding_af_iconos,
                    },
                    {
                        type: 'image',
                        name: "iconos_2",
                        content: branding_af_iconos2,
                    },
                    {
                        type: 'image',
                        name: "iconos_3",
                        content: branding_af_iconos3,
                    },
                    {
                        type: 'image',
                        name: "imagen",
                        content: branding_af_imagen,
                    },
                    {
                        type: 'image',
                        name: "logo",
                        content: branding_af_logo,
                    },
                    {
                        type: 'image',
                        name: "logo_spider",
                        content: branding_af_logo_spider,
                    },
                    {
                        type: 'image',
                        name: "paneles",
                        content: branding_af_paneles,
                    },
                    {
                        type: 'image',
                        name: "tipos",
                        content: branding_af_tipos,
                    },
                    {
                        type: 'pdf',
                        name: "brand_bible",
                        content: branding_af_brand_bible,
                    },
                ]
            },
            {
                type: 'folder',
                name: "Delugram",
                display: 'gallery',
                content: [
                    {
                        type: 'image',
                        name: 'bible_1',
                        content: branding_delugram_bible_1,
                    },
                    {
                        type: 'image',
                        name: 'bible_2',
                        content: branding_delugram_bible_2,
                    },
                    {
                        type: 'image',
                        name: 'bible_3',
                        content: branding_delugram_bible_3,
                    },
                    {
                        type: 'image',
                        name: 'bible_4',
                        content: branding_delugram_bible_4,
                    },
                    {
                        type: 'image',
                        name: 'bible_5',
                        content: branding_delugram_bible_5,
                    },
                    {
                        type: 'image',
                        name: 'bible_6',
                        content: branding_delugram_bible_6,
                    },
                    {
                        type: 'image',
                        name: 'bible_7',
                        content: branding_delugram_bible_7,
                    },
                    {
                        type: 'image',
                        name: 'bible_8',
                        content: branding_delugram_bible_8,
                    },
                    {
                        type: 'image',
                        name: 'bible_9',
                        content: branding_delugram_bible_9,
                    },
                    {
                        type: 'pdf',
                        name: 'bible',
                        content: branding_delugram_bible_pdf,
                    },
                    {
                        type: 'image',
                        name: 'logo.gif',
                        content: branding_delugram_logo_gif,
                    },
                    {
                        type: 'video',
                        name: 'logo.mp4',
                        content: branding_delugram_logo_mp4,
                        thumbnail: branding_delugram_logo_mp4_thumbnail,
                    },
                ]
            },
            {
                type: 'folder',
                name: "Farmacia",
                display: 'gallery',
                content: [
                    {
                        type: 'pdf',
                        name: "Te cuida",
                        content: branding_farmacia_tecuida,
                    },
                    {
                        type: 'pdf',
                        name: "Sancho de Mesa",
                        content: branding_farmacia_sdm,
                    },
                    {
                        type: 'video',
                        name: "Logo Te Cuida",
                        content: branding_farmacia_logo_tecuida,
                        thumbnail: branding_farmacia_logo_tecuida_thumbnail,
                    },
                    {
                        type: 'video',
                        name: "Lettering SdM",
                        content: branding_farmacia_lettering,
                        thumbnail: branding_farmacia_lettering_thumbnail,
                    },
                ]
            },
            {
                type: 'folder',
                name: "jlazz",
                display: 'gallery',
                content: [
                    {
                        type: 'image',
                        name: "logo",
                        content: branding_jlazz_logo,
                    },
                    {
                        type: 'image',
                        name: "logo_bg",
                        content: branding_jlazz_logo_bg,
                    },
                    {
                        type: 'video',
                        name: "logo_mp4",
                        content: branding_jlazz_logo_mp4,
                        thumbnail: branding_jlazz_logo_mp4_thumbnail,
                    },
                    {
                        type: 'image',
                        name: "portrait",
                        content: branding_jlazz_portrait,
                    },
                    {
                        type: 'video',
                        name: "transition-sound",
                        content: branding_jlazz_transition,
                        thumbnail: branding_jlazz_transition_thumbnail,
                    },
                ]
            },
            {
                type: 'folder',
                name: "Proyectos",
                display: 'gallery',
                content: [
                    {
                        type: 'image',
                        name: 'Doppie Ganger',
                        content: branding_proyectos_doppie,
                    },
                    {
                        type: 'image',
                        name: 'Fun & Food',
                        content: branding_proyectos_fun_n_food,
                    },
                    {
                        type: 'image',
                        name: 'Example packaging',
                        content: branding_proyectos_example_packaging,
                    },
                ]
            },
        ]
    };

    linkParents(folder);

    return folder;
}
function getDrawingFolder () : Folder {
    const folder: Folder = {
        type: 'folder',
        name: "Drawing",
        display: 'list',
        parentFolder: null,
        content: [
            {
                type: 'folder',
                name: "Concept art",
                display: 'list',
                content: [
                    {
                        type: 'folder',
                        name: "Book of Mystery",
                        display: 'gallery',
                        content: [
                            {
                                type: 'image',
                                name: "3",
                                content: drawing_conceptart_bom_3,
                            },
                            {
                                type: 'image',
                                name: "dana",
                                content: drawing_conceptart_bom_dana,
                            },
                            {
                                type: 'image',
                                name: "dana_elect",
                                content: drawing_conceptart_bom_dana_elect,
                            },
                            {
                                type: 'image',
                                name: "elec",
                                content: drawing_conceptart_bom_elec,
                            },
                            {
                                type: 'image',
                                name: "elect1",
                                content: drawing_conceptart_bom_elect1,
                            },
                            {
                                type: 'image',
                                name: "elect3",
                                content: drawing_conceptart_bom_elect3,
                            },
                            {
                                type: 'image',
                                name: "lloyd",
                                content: drawing_conceptart_bom_lloyd,
                            },
                            {
                                type: 'image',
                                name: "props",
                                content: drawing_conceptart_bom_props,
                            },
                            {
                                type: 'image',
                                name: "virginia",
                                content: drawing_conceptart_bom_virginia,
                            }
                        ]
                    },
                    {
                        type: 'folder',
                        name: "Aracnephobia",
                        display: 'gallery',
                        content: [
                            {
                                type: 'image',
                                name: "1",
                                content: drawing_conceptart_aracnephobia1,
                            },
                            {
                                type: 'image',
                                name: "10",
                                content: drawing_conceptart_aracnephobia10,
                            },
                            {
                                type: 'image',
                                name: "11",
                                content: drawing_conceptart_aracnephobia11,
                            },
                            {
                                type: 'image',
                                name: "12",
                                content: drawing_conceptart_aracnephobia12,
                            },
                            {
                                type: 'image',
                                name: "13",
                                content: drawing_conceptart_aracnephobia13,
                            },
                            {
                                type: 'image',
                                name: "14",
                                content: drawing_conceptart_aracnephobia14,
                            },
                            {
                                type: 'image',
                                name: "15",
                                content: drawing_conceptart_aracnephobia15,
                            },
                            {
                                type: 'image',
                                name: "16",
                                content: drawing_conceptart_aracnephobia16,
                            },
                            {
                                type: 'image',
                                name: "17",
                                content: drawing_conceptart_aracnephobia17,
                            },
                            {
                                type: 'image',
                                name: "18",
                                content: drawing_conceptart_aracnephobia18,
                            },
                            {
                                type: 'image',
                                name: "19",
                                content: drawing_conceptart_aracnephobia19,
                            },
                            {
                                type: 'image',
                                name: "2",
                                content: drawing_conceptart_aracnephobia2,
                            },
                            {
                                type: 'image',
                                name: "20",
                                content: drawing_conceptart_aracnephobia20,
                            },
                            {
                                type: 'image',
                                name: "3",
                                content: drawing_conceptart_aracnephobia3,
                            },
                            {
                                type: 'image',
                                name: "4",
                                content: drawing_conceptart_aracnephobia4,
                            },
                            {
                                type: 'image',
                                name: "5",
                                content: drawing_conceptart_aracnephobia5,
                            },
                            {
                                type: 'image',
                                name: "6",
                                content: drawing_conceptart_aracnephobia6,
                            },
                            {
                                type: 'image',
                                name: "7",
                                content: drawing_conceptart_aracnephobia7,
                            },
                            {
                                type: 'image',
                                name: "8",
                                content: drawing_conceptart_aracnephobia8,
                            },
                            {
                                type: 'image',
                                name: "9",
                                content: drawing_conceptart_aracnephobia9,
                            }
                        ]
                    },
                    {
                        type: 'folder',
                        name: "Delugram",
                        display: 'gallery',
                        content: [
                            {
                                type: 'image',
                                name: "corazon",
                                content: drawing_conceptart_delugram_corazon,
                            },
                            {
                                type: 'image',
                                name: "fernanda_susto",
                                content: drawing_conceptart_delugram_fernanda_susto,
                            },
                            {
                                type: 'image',
                                name: "fern_sorpresa",
                                content: drawing_conceptart_delugram_fern_sorpresa,
                            },
                            {
                                type: 'image',
                                name: "img_3559",
                                content: drawing_conceptart_delugram_img_3559,
                            },
                            {
                                type: 'image',
                                name: "img_3564",
                                content: drawing_conceptart_delugram_img_3564,
                            },
                            {
                                type: 'image',
                                name: "img_3567",
                                content: drawing_conceptart_delugram_img_3567,
                            },
                            {
                                type: 'image',
                                name: "img_3570",
                                content: drawing_conceptart_delugram_img_3570,
                            },
                            {
                                type: 'image',
                                name: "img_4386",
                                content: drawing_conceptart_delugram_img_4386,
                            },
                            {
                                type: 'image',
                                name: "img_4387",
                                content: drawing_conceptart_delugram_img_4387,
                            },
                            {
                                type: 'image',
                                name: "img_4428",
                                content: drawing_conceptart_delugram_img_4428,
                            },
                            {
                                type: 'image',
                                name: "img_4430",
                                content: drawing_conceptart_delugram_img_4430,
                            },
                            {
                                type: 'image',
                                name: "img_4432",
                                content: drawing_conceptart_delugram_img_4432,
                            },
                            {
                                type: 'image',
                                name: "img_4434",
                                content: drawing_conceptart_delugram_img_4434,
                            },
                            {
                                type: 'image',
                                name: "img_4472",
                                content: drawing_conceptart_delugram_img_4472,
                            },
                            {
                                type: 'image',
                                name: "img_4473",
                                content: drawing_conceptart_delugram_img_4473,
                            },
                            {
                                type: 'image',
                                name: "love_2",
                                content: drawing_conceptart_delugram_love_2,
                            },
                            {
                                type: 'image',
                                name: "maria_fernanda",
                                content: drawing_conceptart_delugram_maria_fernanda,
                            },
                            {
                                type: 'image',
                                name: "max",
                                content: drawing_conceptart_delugram_max,
                            },
                            {
                                type: 'image',
                                name: "max2",
                                content: drawing_conceptart_delugram_max2,
                            },
                            {
                                type: 'image',
                                name: "max_6",
                                content: drawing_conceptart_delugram_max_6,
                            },
                            {
                                type: 'image',
                                name: "max_suffer",
                                content: drawing_conceptart_delugram_max_suffer,
                            },
                            {
                                type: 'image',
                                name: "max_y_travis",
                                content: drawing_conceptart_delugram_max_y_travis,
                            },
                            {
                                type: 'image',
                                name: "telefono",
                                content: drawing_conceptart_delugram_telefono,
                            },
                            {
                                type: 'image',
                                name: "travis",
                                content: drawing_conceptart_delugram_travis,
                            },
                            {
                                type: 'image',
                                name: "travis_2",
                                content: drawing_conceptart_delugram_travis_2,
                            },
                            {
                                type: 'image',
                                name: "travis_buscando",
                                content: drawing_conceptart_delugram_travis_buscando,
                            },
                            {
                                type: 'image',
                                name: "travis_feliz",
                                content: drawing_conceptart_delugram_travis_feliz,
                            },
                            {
                                type: 'image',
                                name: "travis_frustrado",
                                content: drawing_conceptart_delugram_travis_frustrado,
                            },
                            {
                                type: 'image',
                                name: "travis_preocupado",
                                content: drawing_conceptart_delugram_travis_preocupado,
                            },
                            {
                                type: 'image',
                                name: "uiux",
                                content: drawing_conceptart_delugram_uiux,
                            },
                            {
                                type: 'image',
                                name: "uiux2",
                                content: drawing_conceptart_delugram_uiux2,
                            }
                        ]
                    },
                    {
                        type: 'folder',
                        name: "Doll's chest",
                        display: 'gallery',
                        content: [
                            {
                                type: 'image',
                                name: "img_4447",
                                content: drawing_conceptart_dc_img_4447,
                            },
                            {
                                type: 'image',
                                name: "img_4448",
                                content: drawing_conceptart_dc_img_4448,
                            },
                            {
                                type: 'image',
                                name: "img_4449",
                                content: drawing_conceptart_dc_img_4449,
                            },
                            {
                                type: 'image',
                                name: "img_4450",
                                content: drawing_conceptart_dc_img_4450,
                            }
                        ]
                    },
                ]
            },
            {
                type: 'folder',
                name: "Digital",
                display: 'gallery',
                content: [
                    {
                        type: 'image',
                        name: "466794376_9413315175350647_7482732383852466772_n",
                        content: drawing_digital_466794376_9413315175350647_7482732383852466772_n,
                    },
                    {
                        type: 'image',
                        name: "466954493_9413315695350595_2470295891001182443_n",
                        content: drawing_digital_466954493_9413315695350595_2470295891001182443_n,
                    },
                    {
                        type: 'image',
                        name: "466962932_9413315718683926_2934517381596426580_n",
                        content: drawing_digital_466962932_9413315718683926_2934517381596426580_n,
                    },
                    {
                        type: 'image',
                        name: "480445171_931030712576154_8397980858810885146_n",
                        content: drawing_digital_480445171_931030712576154_8397980858810885146_n,
                    },
                    {
                        type: 'image',
                        name: "480867448_935132035499355_8039105087864904742_n",
                        content: drawing_digital_480867448_935132035499355_8039105087864904742_n,
                    },
                    {
                        type: 'image',
                        name: "481091585_936381998707692_3849161234069171315_n",
                        content: drawing_digital_481091585_936381998707692_3849161234069171315_n,
                    },
                    {
                        type: 'image',
                        name: "bu",
                        content: drawing_digital_bu,
                    },
                    {
                        type: 'image',
                        name: "crismasinada",
                        content: drawing_digital_crismasinada,
                    },
                    {
                        type: 'image',
                        name: "img_4452",
                        content: drawing_digital_img_4452,
                    },
                    {
                        type: 'image',
                        name: "img_4453",
                        content: drawing_digital_img_4453,
                    },
                    {
                        type: 'image',
                        name: "img_4454",
                        content: drawing_digital_img_4454,
                    },
                    {
                        type: 'image',
                        name: "img_4455",
                        content: drawing_digital_img_4455,
                    },
                    {
                        type: 'image',
                        name: "img_4469",
                        content: drawing_digital_img_4469,
                    },
                    {
                        type: 'image',
                        name: "img_4471",
                        content: drawing_digital_img_4471,
                    },
                    {
                        type: 'image',
                        name: "la_princesa_del_país_de_las_maravillas",
                        content: drawing_digital_la_princesa_del_pa_s_de_las_maravillas,
                    }
                ]
            },
            {
                type: 'folder',
                name: "Editorial",
                display: 'gallery',
                content: [
                    {
                        type: 'image',
                        name: "ilustración_sin_título",
                        content: drawing_editorial_ilustracio_n_sin_ti_tulo,
                    },
                    {
                        type: 'image',
                        name: "ilustración_sin_título_(10)",
                        content: drawing_editorial_ilustracio_n_sin_ti_tulo__10_,
                    },
                    {
                        type: 'image',
                        name: "ilustración_sin_título_(12)",
                        content: drawing_editorial_ilustracio_n_sin_ti_tulo__12_,
                    },
                    {
                        type: 'image',
                        name: "ilustración_sin_título_(13)",
                        content: drawing_editorial_ilustracio_n_sin_ti_tulo__13_,
                    },
                    {
                        type: 'image',
                        name: "ilustración_sin_título_(14)",
                        content: drawing_editorial_ilustracio_n_sin_ti_tulo__14_,
                    },
                    {
                        type: 'image',
                        name: "ilustración_sin_título_(17)",
                        content: drawing_editorial_ilustracio_n_sin_ti_tulo__17_,
                    },
                    {
                        type: 'image',
                        name: "ilustración_sin_título_(18)",
                        content: drawing_editorial_ilustracio_n_sin_ti_tulo__18_,
                    },
                    {
                        type: 'image',
                        name: "ilustración_sin_título_(19)",
                        content: drawing_editorial_ilustracio_n_sin_ti_tulo__19_,
                    },
                    {
                        type: 'image',
                        name: "img_3284",
                        content: drawing_editorial_img_3284,
                    },
                    {
                        type: 'image',
                        name: "img_4456",
                        content: drawing_editorial_img_4456,
                    },
                    {
                        type: 'image',
                        name: "img_4457",
                        content: drawing_editorial_img_4457,
                    },
                    {
                        type: 'image',
                        name: "img_4458",
                        content: drawing_editorial_img_4458,
                    },
                    {
                        type: 'image',
                        name: "img_4459",
                        content: drawing_editorial_img_4459,
                    },
                    {
                        type: 'image',
                        name: "img_4460",
                        content: drawing_editorial_img_4460,
                    },
                    {
                        type: 'image',
                        name: "img_4461",
                        content: drawing_editorial_img_4461,
                    },
                    {
                        type: 'image',
                        name: "img_4462",
                        content: drawing_editorial_img_4462,
                    },
                    {
                        type: 'image',
                        name: "img_4463",
                        content: drawing_editorial_img_4463,
                    },
                    {
                        type: 'image',
                        name: "img_4464",
                        content: drawing_editorial_img_4464,
                    },
                    {
                        type: 'image',
                        name: "img_4465",
                        content: drawing_editorial_img_4465,
                    },
                    {
                        type: 'image',
                        name: "img_4466",
                        content: drawing_editorial_img_4466,
                    },
                    {
                        type: 'image',
                        name: "img_4467",
                        content: drawing_editorial_img_4467,
                    }
                ]
            },
            {
                type: 'folder',
                name: "Tattoo",
                display: 'gallery',
                content: [
                    {
                        type: 'image',
                        name: "img_4451",
                        content: drawing_tatuaje_img_4451,
                    },
                    {
                        type: 'image',
                        name: "img_4470",
                        content: drawing_tatuaje_img_4470,
                    },
                ]
            },
        ]
    };

    linkParents(folder);

    return folder;
}
function getReelsFolder () : Folder {
    const folder: Folder = {
        type: 'folder',
        name: "Reel",
        display: 'gallery',
        parentFolder: null,
        content: [
            {
                type: 'video',
                name: "blanco_sin_fondo",
                content: reels_blanco_sin_fondo,
                thumbnail: reels_blanco_sin_fondo_thumbnail,
            },
            {
                type: 'video',
                name: "branding",
                content: reels_branding,
                thumbnail: reels_branding_thumbnail,
            },
            {
                type: 'video',
                name: "espera_ouija",
                content: reels_espera_ouija,
                thumbnail: reels_espera_ouija_thumbnail,
            },
            {
                type: 'video',
                name: "Esto es Aracne Phobia",
                host: 'youtube',
                content: "https://www.youtube.com/watch?v=jl8yUdUaZ70",
                thumbnail: reels_esto_es_aracne_phobia_thumbnail,
            },
            {
                type: 'video',
                name: "intro",
                content: reels_intro,
                thumbnail: reels_intro_thumbnail,
            },
            {
                type: 'video',
                name: "intros_videos_fecha",
                content: reels_intros_videos_fecha,
                thumbnail: reels_intros_videos_fecha_thumbnail,
            },
            {
                type: 'video',
                name: "intro_mejorada",
                content: reels_intro_mejorada,
                thumbnail: reels_intro_mejorada_thumbnail,
            },
            {
                type: 'video',
                name: "multimedia1",
                content: reels_multimedia1,
                thumbnail: reels_multimedia1_thumbnail,
            },
            {
                type: 'video',
                name: "zona",
                content: reels_zona,
                thumbnail: reels_zona_thumbnail,
            },
        ]
    };

    linkParents(folder);

    return folder;
}

function linkParents (folder: Folder) {
    for (let i = 0; i < folder.content.length; i++) {
        const f = folder.content[i];
        f.parentFolder = folder;

        if (f.type === 'folder') {
            linkParents(f);
        }
    }
}

export function getWindowTitle (content: WindowContent) {
    if (content.type === 'folder') {
        return content.folder.name;
    }
    else if (content.type === 'image') {
        return content.images[content.selectedIndex].name;
    }
    else if (content.type === 'video') {
        return content.videos[content.selectedIndex].name;
    }
    else if (content.type === 'pdf') {
        return content.pdf.name;
    }
}