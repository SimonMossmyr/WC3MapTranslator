import { CamerasTranslator, DoodadsTranslator, ImportsTranslator, InfoTranslator, ObjectsTranslator, RegionsTranslator, SoundsTranslator, StringsTranslator, TerrainTranslator, UnitsTranslator } from './lib/translators';

export class Translator {

    public Doodads: DoodadsTranslator;
    public Strings: StringsTranslator;
    public Terrain: TerrainTranslator;
    public Units: UnitsTranslator;
    public Regions: RegionsTranslator;
    public Cameras: CamerasTranslator;
    public Sounds: SoundsTranslator;

    public Objects: ObjectsTranslator;

    public Imports: ImportsTranslator;
    public Info: InfoTranslator;

    constructor() {
        this.Doodads = new DoodadsTranslator();
        this.Strings = new StringsTranslator();
        this.Terrain = new TerrainTranslator();
        this.Units = new UnitsTranslator();
        this.Regions = new RegionsTranslator();
        this.Cameras = new CamerasTranslator();
        this.Sounds = new SoundsTranslator();

        this.Objects = new ObjectsTranslator();

        this.Imports = new ImportsTranslator();
        this.Info = new InfoTranslator();
    }
}
