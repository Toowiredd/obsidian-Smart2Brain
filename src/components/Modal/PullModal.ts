import { Modal, App } from 'obsidian';
import PullComponent from './PullModal.svelte';

export class PullModal extends Modal {
    component: PullComponent;

    onOpen() {
        new PullComponent({
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
