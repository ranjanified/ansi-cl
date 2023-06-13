import Syntax from "$lib/pages/syntax/Syntax.svelte";
import Introduction from "$lib/pages/intro/Introduction.svelte";
import Home from "$lib/home/Home.svelte";
import NotFound from "$lib/not-found/NotFound.svelte";
import ObjectsContent from "$lib/pages/objects/ObjectsContent.svelte";
import IterationContent from "$lib/pages/iteration/IterationContent.svelte";
import TypesAndClassesContent from "$lib/pages/types-and-classes/TypesAndClassesContent.svelte";
import DataAndControlFlowContent from "$lib/pages/data-and-control/DataAndControlFlowContent.svelte";
import SymbolsContent from "$lib/pages/symbols/SymbolsContent.svelte";
import PackagesContent from "$lib/pages/packages/PackagesContent.svelte";
import NumbersContent from "$lib/pages/numbers/NumbersContent.svelte";
import StringsContent from "$lib/pages/strings/StringsContent.svelte";
import StreamsContent from "$lib/pages/streams/StreamsContent.svelte";
import SysConstructionContent from "$lib/pages/sys-construction/SysConstructionContent.svelte";
import GlossaryContent from "$lib/pages/glossary/GlossaryContent.svelte";
import HashTablesContent from "$lib/pages/hash-tables/HashTablesContent.svelte";
import ConditionsContent from "$lib/pages/conditions/ConditionsContent.svelte";
import StructuresContent from "$lib/pages/structures/StructuresContent.svelte";
import CharactersContent from "$lib/pages/characters/CharactersContent.svelte";
import ConsesContent from "$lib/pages/conses/ConsesContent.svelte";
import ArraysContent from "$lib/pages/arrays/ArraysContent.svelte";
import SequencesContent from "$lib/pages/sequences/SequencesContent.svelte";
import FileNamesContent from "$lib/pages/file-names/FileNamesContent.svelte";
import FilesContent from "$lib/pages/files/FilesContent.svelte";
import PrinterContent from "$lib/pages/printer/PrinterContent.svelte";
import ReaderContent from "$lib/pages/reader/ReaderContent.svelte";
import EnvironmentContent from "$lib/pages/environment/EnvironmentContent.svelte";
import EvalAndCompileContent from "$lib/pages/eval-and-compile/EvalAndCompileContent.svelte";

export const component_consts = {
    appendix: 'appendix',
    master_index: 'master-index',
    home: 'home',
    intro: 'intro',
    syntax: 'syntax',
    eval_and_compile: 'eval&compile',
    types_and_classes: 'types&classes',
    data_and_control_flow: 'd&cflow',
    iteration: 'iteration',
    objects: 'objects',
    structures: 'structures',
    conditions: 'conditions',
    symbols: 'symbols',
    packages: 'packages',
    numbers: 'numbers',
    characters: 'characters',
    conses: 'conses',
    arrays: 'arrays',
    strings: 'strings',
    sequences: 'sequences',
    hash_tables: 'hash-tables',
    file_names: 'file-names',
    files: 'files',
    streams: 'streams',
    printer: 'printer',
    reader: 'reader',
    sys_construction: 'sys-construction',
    environment: 'environment',
    glossary: 'glossary',
    404: 'glossary'
}

export const component_map = {
    [component_consts.home]: Home,
    [component_consts.intro]: Introduction,
    [component_consts.syntax]: Syntax,
    [component_consts.eval_and_compile]: EvalAndCompileContent,
    [component_consts.types_and_classes]: TypesAndClassesContent,
    [component_consts.data_and_control_flow]: DataAndControlFlowContent,
    [component_consts.iteration]: IterationContent,
    [component_consts.objects]: ObjectsContent,
    [component_consts.structures]: StructuresContent,
    [component_consts.conditions]: ConditionsContent,
    [component_consts.symbols]: SymbolsContent,
    [component_consts.packages]: PackagesContent,
    [component_consts.numbers]: NumbersContent,
    [component_consts.characters]: CharactersContent,
    [component_consts.conses]: ConsesContent,
    [component_consts.arrays]: ArraysContent,
    [component_consts.strings]: StringsContent,
    [component_consts.sequences]: SequencesContent,
    [component_consts.hash_tables]: HashTablesContent,
    [component_consts.file_names]: FileNamesContent,
    [component_consts.files]: FilesContent,
    [component_consts.streams]: StreamsContent,
    [component_consts.printer]: PrinterContent,
    [component_consts.reader]: ReaderContent,
    [component_consts.sys_construction]: SysConstructionContent,
    [component_consts.environment]: EnvironmentContent,
    [component_consts.glossary]: GlossaryContent,
    [404]: NotFound
}