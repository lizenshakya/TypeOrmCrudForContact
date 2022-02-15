import { Column } from "typeorm";

export abstract class BaseRecord {
    @Column({ type: "timestamp", default: () => 'CURRENT_TIMESTAMP', name: 'created_at' })
    createdAt: Date = new Date();
  
    @Column({ type: "timestamp", name: 'updated_at', default: () => 'UPDATE CURRENT_TIMESTAMP' })
    updatedAt: Date = new Date();  

}