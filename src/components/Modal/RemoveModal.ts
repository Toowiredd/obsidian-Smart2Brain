import { Modal, App } from 'obsidian';
import RemoveComponent from './RemoveModal.svelte';

export class RemoveModal extends Modal {
    component: RemoveComponent;

    onOpen() {
        new RemoveComponent({
            target: this.contentEl,
            props: {
                modal: this as Modal,
            },
        });
    }

    onClose() {
        const { contentEl } = this;
        contentEl.empty();
    }
}
