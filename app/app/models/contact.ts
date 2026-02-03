import type {
    Address
} from '~/app/models/common'


export interface Contact {
    title:        string;
    description:  string[];
    address:      Address;
}
