import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"



const PendingContracts = () => {
    return (
        <div>
            <Table>
                <TableCaption>
                    List of Pending Contracts
                </TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>SI.No</TableHead>
                        <TableHead>Contract Details</TableHead>
                        <TableHead> Action</TableHead>
                        
                    </TableRow>
                </TableHeader>
            </Table>



        </div>
    )
}

export default PendingContracts