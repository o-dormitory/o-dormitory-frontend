import _ from 'lodash';
import { type IMagazine } from '../model';
import { api } from '~/shared/api';

export const magazineStore = defineStore('magazine', () => {
  const magazines = ref<IMagazine[]>([]);

  const magazinesMap = computed(() => _.keyBy(magazines.value, 'uid'));

  const getMagazines = async () => {
    const allMagazines = await api.magazine!.getAllMagazines();

    magazines.value.push(...allMagazines);
  };

  const getMagazine = async (uid: string) => {
    let magazine: IMagazine | null = magazinesMap.value[uid] ?? null;

    if (magazine) {
      return magazine;
    }

    magazine = await api.magazine!.getMagazine({ uid });

    if (!magazine) {
      return null;
    }

    addMagazineLocally(magazine);

    return magazine;
  };

  const renameMagazineLocally = (uid: string, name: string) => {
    const magazine = magazinesMap.value[uid];

    if (magazine) {
      magazine.name = name;
    }
  };

  const changeAddressLocally = (uid: string, address: string) => {
    const magazine = magazinesMap.value[uid];

    if (magazine) {
      magazine.address = address;
    }
  };

  const addMagazineLocally = (magazine: IMagazine) => {
    if (!_.find(magazines.value, ({ uid }) => magazine.uid === uid)) {
      magazines.value.push(magazine);
    }
  };

  const removeMagazineLocally = (uidToRemove: string) => {
    magazines.value = _.remove(magazines.value, ({ uid }) => uid === uidToRemove);
  };

  return {
    magazines,
    magazinesMap,

    getMagazine,
    getMagazines,
    addMagazineLocally,
    renameMagazineLocally,
    changeAddressLocally,
    removeMagazineLocally,
  };
});
