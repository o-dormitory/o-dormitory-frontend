import _ from 'lodash';
import { type IMagazine } from '../model';

export const magazineStore = defineStore('magazine', () => {
  const magazines = ref<IMagazine[]>([]);

  const magazinesMap = computed(() => _.keyBy(magazines.value, 'uid'));

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

    addMagazineLocally,
    renameMagazineLocally,
    changeAddressLocally,
    removeMagazineLocally,
  };
});
