import create from 'zustand';
import ITemplateNameStore from './TemplateNameStore.interface';

const useTemplateNameStore = create<ITemplateNameStore>()((set) => ({
  count: 0,
  increase: (by) => set((state) => ({ count: state.count + by })),
}));

export default useTemplateNameStore;
