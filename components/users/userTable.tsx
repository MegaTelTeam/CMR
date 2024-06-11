"use client"
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Input, Button, Pagination, SortDescriptor, User, Spinner} from "@nextui-org/react";

import { useState, useMemo, useCallback, useEffect } from "react";
import { TiUserDelete } from "react-icons/ti";

import { IoSearchOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { DeleteUser, getUsers } from "@/lib/actions/user.action";

import { HiOutlineDotsVertical } from "react-icons/hi";
import AddUserModal from "./addUserModal";

export type userCred = {
  email:string,
  username:string,
  id:string,
  created_at:string,
}

export default function UserTable(){
    const [users, setUsers] = useState<userCred[] | null>(null)
    const pathName = usePathname()

    const AddUsers = (user:userCred)=>{
      setUsers((prev)=>{
        if(!prev) return null
        return [...prev, user]
      })
    }

    useEffect(()=>{
      getUsers()
      .then((data)=>{
        setUsers(data)
      }).catch(()=>{
        setUsers([])
      })
    },[pathName])

    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({column: '$.3',direction:"descending"});

    const [rowsPerPage, setRowsPerPage] = useState(30);
    const [filterValue, setFilterValue] = useState("");
    const [page, setPage] = useState(1);
    
    const hasSearchFilter = Boolean(filterValue);

    const filteredItems = useMemo(() => {
        if(!users || !users.length) return users
        let filteredUsers = [...users];
    
        if (hasSearchFilter) {
            filteredUsers = filteredUsers.filter((user) =>
                user.username.toLowerCase().includes(filterValue.toLowerCase()),
          );
        }

        return filteredUsers;
    }, [filterValue, hasSearchFilter, users]);

    const pages = filteredItems ? Math.ceil(filteredItems.length / rowsPerPage) : 0;

    const sortedItems = useMemo(() => {
        if(!sortDescriptor.direction || !filteredItems?.length) return filteredItems
        return [...filteredItems].sort((a, b) => {
            const first = new Date(a.created_at)
            const second = new Date(b.created_at)
            const cmp = first < second ? -1 : first > second ? 1 : 0;
        
            return sortDescriptor.direction === "descending" ? -cmp : cmp;
        });
      }, [sortDescriptor, filteredItems]);

    const items = useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return sortedItems?.slice(start, end);
    }, [page, sortedItems, rowsPerPage]);

    const onSearchChange = useCallback((value:string) => {
        if (value) {
          setFilterValue(value);
          setPage(1);
        } else {
          setFilterValue("");
        }
    }, []);

    const onClear = useCallback(()=>{
        setFilterValue("")
        setPage(1)
    },[])

    const onRowsPerPageChange = useCallback((e:React.ChangeEvent<HTMLSelectElement>) => {
        setRowsPerPage(Number(e.target.value));
        setPage(1);
    }, []);

    const topContent = useMemo(() => {
        return (
        
          <div className="flex flex-col gap-4">
            <div className="flex justify-between gap-3 items-end">
              <Input
                isClearable
                size="sm"
                className="w-full sm:max-w-[44%]"
                placeholder="Search by name..."
                startContent={<IoSearchOutline />}
                value={filterValue}
                onClear={() => onClear()}
                onValueChange={onSearchChange}
              />
              <div className="flex gap-3">
                <AddUserModal AddUsers={AddUsers}/>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-default-400 text-small">Total {filteredItems ? filteredItems.length : 0} users</span>
              <label className="flex items-center text-default-400 text-small">
                Rows per page:
                <select
                  className="bg-transparent outline-none text-default-400 text-small"
                  value={rowsPerPage}
                  onChange={onRowsPerPageChange}
                >
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                </select>
              </label>
            </div>
          </div>
        );
    }, [filterValue, filteredItems, onClear, onRowsPerPageChange, onSearchChange, rowsPerPage]);

    return(
        <>
        <Table 
            aria-label="Example empty table" 
            className="w-full h-[90%]  flex flex-wrap "
            color="default"
            selectionMode="single"
            selectedKeys={[]}
            sortDescriptor={sortDescriptor}
            onSortChange={setSortDescriptor}
            topContent={topContent}
            bottomContent={
                pages > 1 ?
                <div className="flex w-full justify-center">
                  <Pagination
                    isCompact
                    showControls
                    showShadow
                    color="primary"
                    page={page}
                    total={pages}
                    onChange={(page) => setPage(page)}
                  />
                </div>:null
              }
        >
            <TableHeader>
                <TableColumn>user</TableColumn>
                <TableColumn allowsSorting>createdAt</TableColumn>
                <TableColumn>actions</TableColumn>
            </TableHeader>
            <TableBody emptyContent={users !== null ? "No user to display." :  <Spinner />}>
                {!items ? []:
                    items.map((user)=>(
                        <TableRow key={user.id}>
                            <TableCell>
                              <User   
                                  name={user.username}
                                  description={user.email}
                                />
                            </TableCell>
                            <TableCell>{user.created_at}</TableCell>
                            <TableCell>
                                <div className="translate-x-[-10%]">
                                <Button
                                    isIconOnly
                                    variant="light"
                                    color="danger"
                                    size="sm"
                                    className="text-lg font-extrabold ml-4"
                                    onPress={()=>{
                                      if(users){
                                        DeleteUser({id:user.id}).then(()=>{
                                          console.log("deleted")
                                          setUsers(users.filter((u)=>u.id !== user.id))
                                        })
                                      }
                                    }}>
                                    <TiUserDelete/>
                                </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
        </>
    )
}
